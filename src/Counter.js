import React from 'react';
import { connect } from 'react-redux';

import { increment } from './actions/increment';
import { decrement } from './actions/decrement';

function Counter(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.value.value}</h1>
      <button onClick={() => {
        props.dispatch(increment())
      }} >Increment</button>
      <button onClick={() => {
        props.dispatch(decrement());
      }} >Decrement</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    value: state.value
  };
}

export default connect(mapStateToProps)(Counter);
