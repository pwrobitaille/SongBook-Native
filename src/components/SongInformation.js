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
      <View>
        <Card>
          <CardSection style={styles.infoStyle}>
            <Text style={styles.detailStyle}>
              {this.props.song.tuning}
            </Text>
          </CardSection>
          <CardSection style={styles.infoStyle}>
            <Text style={styles.detailStyle}>
              {this.props.song.capo}
            </Text>
          </CardSection>
          <CardSection style={styles.infoStyle}>
            <Text style={styles.detailStyle}>
              {this.props.song.lyrics}
            </Text>
          </CardSection>
          <CardSection style={styles.infoStyle}>
            <Text style={styles.detailStyle}>
              {this.props.song.tabs}
            </Text>
          </CardSection>
          <CardSection style={styles.infoStyle}>
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
    color: '#046D8B',
    paddingLeft: 5,
  },
  buttonSectionStyle: {
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  infoStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  }
}

export default SongInformation
