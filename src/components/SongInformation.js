import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection, Card, Button, ButtonSection } from './common'

class SongInformation extends Component {


  onRowPress() {
    Actions.songEdit({ song: this.props.song })
  }

  render() {
    return (
      <View style={styles.infoBackgroundStyle}>
        <Card>
          <CardSection>
            <Text style={styles.detailStyle}>
              {this.props.song.tuning}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.detailStyle}>
              {this.props.song.capo}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.detailStyle}>
              {this.props.song.lyrics}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.detailStyle}>
              {this.props.song.tabs}
            </Text>
          </CardSection>
          <CardSection>
            <Text style={styles.detailStyle}>
              {this.props.song.notes}
            </Text>
          </CardSection>

          <ButtonSection style={styles.buttonSectionStyle}>
            <Button
              onPress={this.onRowPress.bind(this)}
              text="Edit"
            />
          </ButtonSection>
        </Card>
      </View>
    )
  }
}

const styles = {
  detailStyle: {
    flex: 1,
    color: '#046D8B'
  },
  buttonSectionStyle: {
    backgroundColor: 'transparent'
  },
  infoBackgroundStyle: {
    // backgroundColor: '#ecbe13'
  }
}

export default SongInformation
