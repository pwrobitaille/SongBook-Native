import { SELECT_SONG } from '../actions/types'

const INITIAL_STATE = {
  title: '',
  tuning: '',
  capo: '',
  lyrics: '',
  tabs: '',
  notes: '',
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_SONG:
      if (state === action.payload) return null;
      return action.payload
    default:
      return state
  }
}
