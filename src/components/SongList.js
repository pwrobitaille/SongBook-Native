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

  createDataSource({ sortedSongs }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(sortedSongs)
  }

  renderRow(song) {
    return <ListItem song={song} />
  }

  render() {
    return (
      <ScrollView>
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
              style={{ paddingBottom: 10 }}
            />
      </ScrollView>
    )
  }
}

const styles = {
  logoStyles: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 120,
    marginRight: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
}


const mapStateToProps = state => {
  const songs = _.map(state.songList, (val, uid) => {
      return { ...val, uid }
  });
console.log(songs);

  function compare(a, b) {
    if (a.title < b.title) {
      return -1
    } if (a.title > b.title) {
      return 1
    }
    return 0
  }

const sortedSongs = songs.sort(compare);

  return { sortedSongs }
}

export default connect(mapStateToProps, { songsFetch })(SongList)
