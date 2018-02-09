import React, { Component } from 'react'
import { Text, View, Linking } from 'react-native'
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
            <Text style={styles.sectionTitleStyle}>
              Tuning: <Text style={styles.inputStyle}>{this.props.song.tuning}</Text>
            </Text>
          </CardSection>
          <CardSection style={styles.infoStyle}>
            <Text style={styles.sectionTitleStyle}>
              Capo: <Text style={styles.inputStyle}>{this.props.song.capo}</Text>
            </Text>
          </CardSection>
          <CardSection style={styles.infoStyle}>
            <Text style={styles.sectionTitleStyle}>
              Lyrics: <Text
                style={styles.inputStyle}
                onPress={() => Linking.openURL(this.props.song.lyrics)}
              >
                  {this.props.song.lyrics}
                </Text>
            </Text>
          </CardSection>
          <CardSection style={styles.infoStyle}>
            <Text style={styles.sectionTitleStyle}>
              Tabs: <Text
                style={styles.inputStyle}
                onPress={() => Linking.openURL(this.props.song.tabs)}
              >
                {this.props.song.tabs}
              </Text>
            </Text>
          </CardSection>
          <CardSection style={styles.infoStyle}>
            <Text style={styles.sectionTitleStyle}>
              Notes: <Text style={styles.inputStyle}>{this.props.song.notes}</Text>
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
  sectionTitleStyle: {
    flex: 1,
    color: '#6ac7b3',
    paddingLeft: 5,
    fontWeight: 'bold'
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 5,
    color: '#046D8B',
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
