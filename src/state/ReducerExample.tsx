import React, {useReducer} from 'react'

const initialState = {
  count:0
}

type ReducerState = {  //Determines model of initialState
  count: number
}

type UpdateAction = {  //UpdateAction and ResetAction is called Discriminated Unions
  type: "increment" | "decrement" 
  payload: number
}

type ResetAction = {  //Discriminated Unions are the advised way to handle useReducer hook in typescript 
  type: "reset"
}

type ReducerAction = UpdateAction | ResetAction

function reducer (state:ReducerState,action: ReducerAction) {
  switch (action.type) {
    case 'increment': {
      return {count: state.count + action.payload}
    } 
     case 'decrement': {
      return {count: state.count - action.payload}
    }
    case 'reset': {
      return initialState
    }
    default:
      return state 
  }
}

export const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <>
    Count : { state.count }
    <button onClick={()=> dispatch({type:'increment',payload:10})}>Increase by 10</button>
    <button onClick={()=> dispatch({type:'decrement',payload:10})}>Decrease by 10</button>
    <button onClick={()=> dispatch({type:'reset'})}>Decrease by 10</button>

    </>
  )
}
