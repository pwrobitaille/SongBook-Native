import React, { Component } from 'react'
import { Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection, Card, Button } from './common'

class SongInformation extends Component {


  onRowPress() {
    Actions.songEdit({ song: this.props.song })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text style={{ flex: 1 }}>
            {this.props.song.tuning}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={{ flex: 1 }}>
            {this.props.song.capo}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={{ flex: 1 }}>
            {this.props.song.lyrics}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={{ flex: 1 }}>
            {this.props.song.tabs}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={{ flex: 1 }}>
            {this.props.song.notes}
          </Text>
        </CardSection>

        <CardSection>
          <Button
            onPress={this.onRowPress.bind(this)}
            text="Edit"
          />
        </CardSection>
      </Card>
    )
  }
}

export default SongInformation
