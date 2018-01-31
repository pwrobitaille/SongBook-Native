import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
  SONG_UPDATE,
  SONG_CREATE,
  SONGS_FETCH_SUCCESS,
  SONG_SAVE_SUCCESS,
  SELECT_SONG
} from './types';

export const songUpdate = ({ prop, value }) => {
  console.log(value);
  return {
    type: SONG_UPDATE,
    payload: { prop, value }
  }
}

export const selectSong = (songId) => {
  return {
    type: SELECT_SONG,
    payload: songId
  }
}

export const songCreate = ({ title, tuning, lyrics, tabs, notes, capo }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/songs`)
      .push({ title, tuning, lyrics, tabs, notes, capo })
      .then(() => {
        dispatch({ type: SONG_CREATE })
        Actions.pop()
      })
  }
}

export const songsFetch = () => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/songs`)
      .on('value', snapshot => {
        dispatch({ type: SONGS_FETCH_SUCCESS, payload: snapshot.val() })
      })
  }
}

export const songSave = ({ title, tuning, lyrics, tabs, notes, capo, uid }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/songs/${uid}`)
      .set({ title, tuning, lyrics, tabs, notes, capo })
      .then(() => {
        dispatch({ type: SONG_SAVE_SUCCESS })
        Actions.pop()
      })
  }
}

export const songDelete = ({ uid }) => {
  const { currentUser } = firebase.auth()

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/songs/${uid}`)
      .remove()
      .then(() => {
        Actions.pop()
      })
    }
  }
