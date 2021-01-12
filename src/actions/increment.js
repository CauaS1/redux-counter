const INCREMENT = 'INCREMENT';

const increment = () => {
  return { 
    type: INCREMENT,
    msg: "You're incrementing!"
  }
}

export { INCREMENT, increment };