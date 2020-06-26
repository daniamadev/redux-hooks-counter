import React from "react"
import { connect } from "react-redux"
import { useSelector, useDispatch } from "react-redux"

const Contador = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const incrementar = () => {
    dispatch({
      type: "INCREMENTAR",
    })
  }

  const decrementar = () => {
    dispatch({
      type: "DECREMENTAR",
    })
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={incrementar}>++</button>
      <button onClick={decrementar}>--</button>
    </>
  )
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(Contador)
