import React from 'react'
import { View } from 'react-native'

const ButtonSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle: {
    padding: 5,
    marginTop: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#046D8B',
    position: 'relative'
  }
}

export { ButtonSection }
