import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListView } from 'react-native'
import { songsFetch } from '../actions'
import ListItem from './ListItem'

class SongList extends Component {

  componentWillMount() {
    this.props.songsFetch()

    this.createDataSource(this.props)
    // const ds = new ListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // })
    //
    // this.dataSource = ds.cloneWithRows()
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
  }

  renderRow(song) {
    console.log(song);
    return <ListItem song={song} />
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}


const mapStateToProps = state => {
  const songs = _.map(state.songList, (val, uid) => {
      return { ...val, uid }
  })

  return { songs }
}

export default connect(mapStateToProps, { songsFetch })(SongList)
