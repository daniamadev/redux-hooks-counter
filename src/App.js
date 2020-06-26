import React from "react"
import Contador from "./Components/Counter"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "./Reducer"

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
function App() {
  return (
    <>
      <Provider store={store}>
        <Contador />
      </Provider>
    </>
  )
}

export default App
