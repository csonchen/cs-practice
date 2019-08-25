import * as React from 'react'

export function Counter7() {
  // const [state, dispatch] = React.useReducer(reducer, initialState)
}

function reducer(state, action) {
  switch(action.type) {
    case 'tick': 
      return {
        ...state,
        count: state.count + state.step
      }
  }
}