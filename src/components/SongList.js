import _ from 'lodash'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
// import { connect } from 'react-redux'
// import { ListView } from 'react-native'
// import { songsFetch } from '../actions'
// import ListItem from './ListItem'

class SongList extends Component {

  // componentWillMount() {
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   })
  //
  //   this.dataSource = ds.cloneWithRows()
  // }
  //
  // renderRow(song) {
  //   return <ListItem song={song} />
  // }

  render() {
    return (
      <View>
        <Text>Song List</Text>
        <Text>Song List</Text>
        <Text>Song List</Text>
      </View>
      // <ListView
      //   dataSource={this.dataSource}
      //   renderRow={this.renderRow}
      // />
    )
  }
}

export default SongList

// const mapStateToProps = state => {
//   const songs = _.map(state.songs, (val, uid) => {
//       return { ...val, uid }
//   })
//
//   return { songs }
// }
//
// export default connect(mapStateToProps, { songsFetch })(SongList)
