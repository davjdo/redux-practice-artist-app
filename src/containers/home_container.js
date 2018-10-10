import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { artistListAll } from '../actions';

import Search from '../components/search';
import Artistlist from '../components/artistlist';

class Home extends Component {
  componentDidMount() {
    this.props.artistListAll();
  }

  getKeywords = event => {
    let key = event.target.value;
    console.log(key);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Search keywords={this.getKeywords} />
        <Artistlist artists={this.props.artists.artistList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    artists: state.artists
  };
};

export default connect(
  mapStateToProps,
  { artistListAll }
)(Home);