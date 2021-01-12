const DECREMENT = 'DECREMENT';
const decrement = () => {
  return {
    type: DECREMENT,
    msg: "You're decrementing"
  }
}

const INCREMENT = 'INCREMENT';
const increment = () => {
  return { 
    type: INCREMENT,
    msg: "You're incrementing!"
  }
}


export { DECREMENT, decrement, INCREMENT, increment }