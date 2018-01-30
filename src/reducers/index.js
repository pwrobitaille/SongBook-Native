import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import SongReducer from './SongReducer'
import SelectionReducer from './SelectionReducer'



export default combineReducers({
  auth: AuthReducer,
  songList: SongReducer,
  songSelectionId: SelectionReducer
})
