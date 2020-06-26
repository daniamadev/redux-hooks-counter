const initialState = {
  counter: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENTAR":
      return {
        counter: state.counter + 1,
      }
    case "DECREMENTAR":
      return {
        counter: state.counter - 1,
      }
    default:
      return state
  }
}

export default reducer
