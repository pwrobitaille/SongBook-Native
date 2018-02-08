import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView, Image, View, ScrollView } from 'react-native'
import { songsFetch } from '../actions'
import ListItem from './ListItem'
import logo from './../../img/SongBook-Logo.png'


class SongList extends Component {


  componentWillMount() {
    this.props.songsFetch()

    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps)
  }

  createDataSource({ songs }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(songs)
    console.log(this.dataSource);
  }

  renderRow(song) {
    console.log(song);
    return <ListItem song={song} />
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.logoStyles}>
            <Image
              style={{ height: 100, width: 125 }}
              source={logo}
            />
          </View>
            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  logoStyles: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
}


const mapStateToProps = state => {
  const songs = _.map(state.songList, (val, uid) => {
      return { ...val, uid }
  })

  return { songs }
}

export default connect(mapStateToProps, { songsFetch })(SongList)
