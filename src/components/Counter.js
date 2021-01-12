import React from 'react';
import { connect } from 'react-redux';

import { decrement, increment } from '../actions';

function Counter(props) {
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
