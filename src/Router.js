import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import SplashScreen from './components/SplashScreen'
import LoginForm from './components/LoginForm'
import SongList from './components/SongList'


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
          key="songList"
          component={SongList}
          title="Song List"
          initial
        />

      </Scene>

      </Scene>
    </Router>
  )
}

export default RouterComponent
