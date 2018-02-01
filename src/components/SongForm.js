import React, { Component } from 'react'
import { View, Text, Picker, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { songUpdate } from '../actions'
import { CardSection, Input } from './common'


class SongForm extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <CardSection>
            <Input
              label='Title'
              placeholder="Hey Jude"
              value={this.props.title}
              onChangeText={value => this.props.songUpdate({ prop: 'title', value })}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Tuning"
              placeholder="Half-Step Down"
              value={this.props.tuning}
              onChangeText={value => this.props.songUpdate({ prop: 'tuning', value })}
            />
          </CardSection>

          <CardSection style={{ flexDirection: 'column' }}>
            <Text style={styles.pickerTextStyle} >
              Capo
            </Text>
            <Picker
              // style={{ flex: 1 }}
              selectedValue={this.props.capo}
              onValueChange={value => this.props.songUpdate({ prop: 'capo', value })}
            >
              <Picker.Item label="None" value="None" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
            </Picker>
          </CardSection>

          <CardSection>
            <Input
              label="Lyrics"
              value={this.props.lyrics}
              onChangeText={value => this.props.songUpdate({ prop: 'lyrics', value })}
            />
          </CardSection>

          <CardSection>
            <Input
              label="Tabs"
              value={this.props.tabs}
              onChangeText={value => this.props.songUpdate({ prop: 'tabs', value })}
              dataDetectorTypes='link'
            />
          </CardSection>

          <CardSection>
            <Input
              label="Notes"
              value={this.props.notes}
              onChangeText={value => this.props.songUpdate({ prop: 'notes', value })}
            />
          </CardSection>
        </View>
      </ScrollView>

    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = (state) => {
  const { title, tuning, lyrics, tabs, notes, capo } = state.songForm

  return { title, tuning, lyrics, tabs, notes, capo }
}

export default connect(mapStateToProps, { songUpdate })(SongForm)
