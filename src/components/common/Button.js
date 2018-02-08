import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}
      style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        {props.text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#046D8B',
    borderRadius: 5,
    // borderWidth: 1,
    // borderColor: 'white',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { Button }
