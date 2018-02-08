import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser
  };
};


export default connect(mapStateToProps, null)(Profile);
