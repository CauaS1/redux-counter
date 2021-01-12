import { INCREMENT, DECREMENT } from '../actions/index';

const initialState = {
  value : 0
}

const valueReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT: 
      return {
        value: state.value + 1,
        msg: "You're incrementing"
      };
    case DECREMENT: 
      return {
        value: state.value - 1,
        msg: "You're decrementing"
      };  
    default:
      return state;      
  }
}

export default valueReducer;