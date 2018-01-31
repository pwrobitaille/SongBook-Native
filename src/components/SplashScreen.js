import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'


class SplashScreen extends Component {

  componentWillMount() {
    setTimeout(function () {
      Actions.login()
    }, 2000);
  }

  render() {
    return(
      <View style={styles.splashStyles}>
        <Text>Splash Screen</Text>
      </View>
    )
  }
}

const styles = {
  splashStyles: {
    backgroundColor: "#95C5FD",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

  }
}

export default SplashScreen
