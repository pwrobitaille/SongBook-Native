import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'


class SplashScreen extends Component {

  componentWillMount() {
    setTimeout(function () {
      Actions.login()
    }, 3000);
  }

  render() {
    return(
      <View>
        <Text>Hello World</Text>
      </View>
    )
  }
}

export default SplashScreen
