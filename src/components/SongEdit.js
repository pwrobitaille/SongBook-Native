import _ from 'lodash'
import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import SongForm from './SongForm'
import { songUpdate, songSave, songDelete } from '../actions'
import { Card, ButtonSection, Button, Confirm } from './common'


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
          <ButtonSection style={styles.buttonSectionStyle}>
            <Button
              onPress={this.onButtonPress.bind(this)}
              text="Save"
            />
          </ButtonSection>

          <ButtonSection style={{ backgroundColor: 'transparent', marginTop: 5 }}>
            <Button
              onPress={() => this.setState({ showModal: !this.state.showModal })}
              text="Delete Song"
            />
          </ButtonSection>

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

const styles = {
  buttonSectionStyle: {
    backgroundColor: 'transparent',
    marginTop: 10
  }
}

const mapStateToProps = (state) => {
  const { title, tuning, lyrics, tabs, notes, capo } = state.songForm

  return { title, tuning, lyrics, tabs, notes, capo }
}

export default connect(mapStateToProps, { songUpdate, songSave, songDelete })(SongEdit)
