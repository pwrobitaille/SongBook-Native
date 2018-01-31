import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import SplashScreen from './components/SplashScreen'
import LoginForm from './components/LoginForm'
import SongList from './components/SongList'
import SongCreate from './components/SongCreate'
import SongEdit from './components/SongEdit'


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="splash"
            component={SplashScreen}
            initial
            hideNavBar
          />
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
          />
      </Scene>

      <Scene key="main">
        <Scene
          rightTitle="Add"
          onRight={() => { Actions.songCreate() }}
          key="songList"
          component={SongList}
          title="Song List"
          initial
        />
        <Scene
          key="songCreate"
          component={SongCreate}
          title="Add Song"
        />
        <Scene
          key="songEdit"
          component={SongEdit}
          title="Edit Song"
        />

      </Scene>

      </Scene>
    </Router>
  )
}

export default RouterComponent
