import React from 'react';
import { connect } from 'react-redux';

function Message(props) {
  console.log(props.message.msg);
  return (
    <h1>{props.message.msg}</h1>
  )
}

const mapStateToProps = state => {
  return {
    message: state.value
  }
}

export default connect(mapStateToProps)(Message);