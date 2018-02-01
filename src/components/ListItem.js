import React, { Component } from 'react'
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import SongInformation from './SongInformation'
import SongItemSection from './SongItemSection'

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
          <SongItemSection style={styles.cardSectionStyle}>
            <Text style={titleStyle}>
              {title}
            </Text>
          </SongItemSection>
          {this.renderDescription()}
      </View>
    </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 20,
    color: 'white'
  },
  cardSectionStyle: {
    backgroundColor: '#6ac7b3',

  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.songSelectionId === ownProps.song.uid

  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)
