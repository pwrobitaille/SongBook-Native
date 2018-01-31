import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Communications from 'react-native-communications'
import SongForm from './SongForm'
import { songUpdate, songSave, songDelete } from '../actions'
import { Card, CardSection, Button, Confirm } from './common'


class SongEdit extends Component {
  state = { showModal: false }

  componentWillMount() {
    _.each(this.props.song, (value, prop) => {
      this.props.songUpdate({ prop, value })
    })
  }

  onButtonPress() {
    const { title, tuning, lyrics, tabs, notes, capo } = this.props

    this.props.songSave({ title, tuning, lyrics, tabs, notes, capo, uid: this.props.song.uid })
  }

  // onTextPress() {
  //   const { phone, shift } = this.props
  //
  //   Communications.text(phone, `Your upcoming shift is on ${shift}`)
  // }

  onAccept() {
    const { uid } = this.props.song
    this.props.songDelete({ uid })
  }

  onDecline() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Card>
        <SongForm />
        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}
            text="Save Changes"
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)} text="Text Schedule" />
        </CardSection>

        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })} text="Fire Employee" />
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { title, tuning, lyrics, tabs, notes, capo } = state.songList

  return { title, tuning, lyrics, tabs, notes, capo }
}

export default connect(mapStateToProps, { songUpdate, songSave, songDelete })(SongEdit)
