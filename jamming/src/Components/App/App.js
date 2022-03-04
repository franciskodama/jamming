import React from 'react'
import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [
        {name: 'Francis', artist:'Kodama', album: 'Francisland', id: '01'}, 
        {name: 'Mariana', artist:'Zorzo', album: 'Mariland', id: '02'},
        {name: 'Andre', artist:'Zorzete', album: 'Zorzoland', id: '03'}
      ],
      playlistName: 'Motherfuckers',
      playlistTracks: [
        {name: 'playlistName1', artist:'playlistKodama', album: 'playlistFrancisland', id: '04'}, 
        {name: 'playlistname2', artist:'playlistZorzo', album: 'playlistMariland', id: '05'},
        {name: 'playlistname3', artist:'playlistZorzete', album: 'playlistZorzoland', id: '06'}
      ]
    }

    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks  
    if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
      return 
    }
    tracks.push(track)
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks
    let newTracks = tracks.filter((currentTrack) => currentTrack.id !== track.id)
    this.setState({playlistTracks: newTracks})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack} 
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
