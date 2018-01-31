import React, { Component } from 'react'
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  renderDescription() {
    const { song, expanded } = this.props

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {song.title}
          </Text>
        </CardSection>
      )
    }
  }

  render() {
    const { titleStyle } = styles
    const { id, title } = this.props.song

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectSong(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
      </View>
    </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.songSelectionId === ownProps.song.id

  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)
