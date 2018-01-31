import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import SongReducer from './SongReducer'
import SelectionReducer from './SelectionReducer'
import SongFormReducer from './SongFormReducer'



export default combineReducers({
  auth: AuthReducer,
  songList: SongReducer,
  songSelectionId: SelectionReducer,
  songForm: SongFormReducer
})
