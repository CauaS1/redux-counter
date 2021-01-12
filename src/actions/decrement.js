const DECREMENT = 'DECREMENT';
const decrement = () => {
  return {
    type: DECREMENT,
    msg: "You're decrementing"
  }
}

export { DECREMENT, decrement }