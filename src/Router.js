import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import SplashScreen from './components/SplashScreen'
import LoginForm from './components/LoginForm'
import SongList from './components/SongList'
import SongCreate from './components/SongCreate'
import SongEdit from './components/SongEdit'


const RouterComponent = () => {

  return (
    <Router
      navigationBarStyle={styles.navBarStyle}
      titleStyle={styles.titleStyle}
    >
      <Scene
        key="root"
        hideNavBar
        leftButtonTextStyle={styles.barButtonTextStyle}
        rightButtonTextStyle={styles.barButtonTextStyle}
        backButtonTintColor="#FFFFFF"
      >
        <Scene key="splashScreen">
          <Scene
            key="splash"
            component={SplashScreen}
            initial
            hideNavBar
          />
        </Scene>

        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
            hideNavBar
          />
        </Scene>

      <Scene key="main">
        <Scene
          // leftButtonImage={{ isStatic: true, uri: './../img/SongBook-small-logo-copy.png' }}
          // leftButtonIconStyle={{ height: 50, width: 50 }}
          rightTitle="Add Song"
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

const styles = {
  navBarStyle: {
    backgroundColor: '#046D8B',
  },
  titleStyle: {
    color: 'white'
  },
  barButtonTextStyle: {
    color: '#FFFFFF'
  }
}

export default RouterComponent
