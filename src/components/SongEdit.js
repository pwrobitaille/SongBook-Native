import _ from 'lodash'
import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
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
        <ScrollView>
          <SongForm />
          <CardSection>
            <Button
              onPress={this.onButtonPress.bind(this)}
              text="Save"
            />
          </CardSection>

          <CardSection>
            <Button
              onPress={() => this.setState({ showModal: !this.state.showModal })}
              text="Delete Song"
            />
          </CardSection>

          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure you want to delete this?
          </Confirm>
        </ScrollView>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { title, tuning, lyrics, tabs, notes, capo } = state.songForm

  return { title, tuning, lyrics, tabs, notes, capo }
}

export default connect(mapStateToProps, { songUpdate, songSave, songDelete })(SongEdit)
