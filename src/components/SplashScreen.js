import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import logo from './../../img/SongBook-Logo.png'


class SplashScreen extends Component {

  componentWillMount() {
    setTimeout(function () {
      Actions.auth()
    }, 2000);
  }

  render() {
    return(
      <View style={styles.splashStyles}>
        <Image
          style={{ height: 200, width: 250 }}
          source={logo}
        />
      </View>
    )
  }
}

const styles = {
  splashStyles: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

  }
}

export default SplashScreen
