import React, { Component } from 'react';
import CommunityList from './CommunityList';
import Modal from '../modal/Modal';
import './communities.css';

class CommunityContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      modalIsOpen: false,
      item: null,
      communityRequest: null,
      communityResponse: null
    }
    this.onModalItemOpen = this.onModalItemOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.onJoinCommunity = this.onJoinCommunity.bind(this);
  }

  componentDidMount() {
    fetch('https://wisdo-test-react.herokuapp.com/feed')
      .then(response => response.json())
      .then(data => this.setState({data: data}))
  }

  onModalItemOpen(item) {
    this.setState({
      modalIsOpen: true,
      item: item
    })
  }

  modalClose() {
    this.setState({
      modalIsOpen: false,
      item: null
    })
  }

  async onJoinCommunity() {
    const url = 'https://wisdo-test-react.herokuapp.com/life-challenge?ids[]=LIFE_CHALLANGE';
    try {
      const fetchResponse = await fetch(url);
      const data = await fetchResponse.json();
      if (data) {
        this.setState({
          communityRequest: data
        })
      }
    } catch(err) {
      console.log(err);
    }

  }

  async onMeetCommunity() {
    const url = 'http://dummy.restapiexample.com/api/v1/create';
    const setting = { method: 'POST'};
    try {
      const fetchResponse = await fetch(url, setting);
      const data = await fetchResponse.json();
      if (data) {
        this.setState({
          communityResponse: data
        })
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className='communityContainer'>
        {this.state.data && this.state.data.length
        ? this.state.data.map((list, i) => <CommunityList key={i} list={list} onModalItemOpen={this.onModalItemOpen}/>)
        : null}
        <Modal
          modalIsOpen={this.state.modalIsOpen}
          item={this.state.item}
          modalClose={this.modalClose}
          onJoinCommunity={this.onJoinCommunity}
          onMeetCommunity={this.onMeetCommunity}
        />
      </div>
    );
  }
}

export default CommunityContainer;