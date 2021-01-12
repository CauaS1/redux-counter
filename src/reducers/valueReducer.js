import { INCREMENT } from '../actions/increment';
import { DECREMENT } from '../actions/decrement';

const initialState = {
  value : 0
}

const valueReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT: 
      return {value: state.value + 1};
    case DECREMENT: 
      return {value: state.value - 1};  
    default:
      return state;      
  }
}

export default valueReducer;