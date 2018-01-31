import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardSection, Button } from './common'
import { songUpdate, songCreate } from '../actions'
import SongForm from './SongForm'

class SongCreate extends Component {

  onButtonPress() {
    const { title, tuning, lyrics, tabs, notes, capo } = this.props

    this.props.songCreate({ title, tuning, lyrics, tabs, notes, capo: capo || 'None' })
  }

  render() {
    return (
      <Card>
        <SongForm {...this.props} />

        <CardSection>
          <Button
            text="Create"
            onPress={this.onButtonPress.bind(this)}
          />
        </CardSection>
      </Card>
    )
  }
}



const mapStateToProps = (state) => {
  const { title, tuning, lyrics, tabs, notes, capo } = state.songList

  return { title, tuning, lyrics, tabs, notes, capo }
}

export default connect(mapStateToProps, { songUpdate, songCreate })(SongCreate)
