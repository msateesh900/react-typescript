import { useReducer } from "react"

type CounterState = {
  count: number
}
type UpdateAction = {
  type: "increment" | "decrement"
  payload: number
}
type ResetAction = {
  type: "reset"
}

// type CounterAction = {
//   type: "increment" | "decrement" | "reset"
//   payload?: number
// }
type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload }
    case "decrement":
      return { count: state.count - action.payload }
    case "reset":
      return initialState
      defeault: return state
  }
}
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Counter:{state.count} &nbsp;
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      &nbsp;
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  )
}
