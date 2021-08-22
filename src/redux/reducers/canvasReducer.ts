import { TOGGLE_CANVAS } from "../actionTypes/actionTypes"
import { initialState } from "../store"
import { AnyAction } from "@reduxjs/toolkit"

const canvasReducer = (state = initialState.canvas, action: AnyAction) => {
  switch (action.type) {
    case TOGGLE_CANVAS:
      return { ...state, show: !state.show }

    default:
      return state
  }
}

export default canvasReducer
