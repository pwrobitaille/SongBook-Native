import React, { Component } from 'react'
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'
import SongInformation from './SongInformation'

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  renderDescription() {
    const { song, expanded } = this.props

    if (expanded) {
      return (
        <SongInformation song={song} />
      )
    }
  }

  render() {
    const { titleStyle } = styles
    const { uid, title } = this.props.song

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectSong(uid)}
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
  const expanded = state.songSelectionId === ownProps.song.uid

  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)
