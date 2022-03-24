import { ALL_DATA, SINGLE_USER } from "../types"

const INITIAL_STATE = {
  data: null,
  showData: null
}

export default (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case ALL_DATA:
      return { ...state, data: payload }
    case SINGLE_USER:
      return { ...state, showData: payload }
    default:
      return state
  }
}