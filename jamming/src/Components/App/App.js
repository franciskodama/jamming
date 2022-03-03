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
        {name: 'name1', artist:'Kodama', album: 'Francisland', id: '01'}, 
        {name: 'name2', artist:'Zorzo', album: 'Mariland', id: '02'},
        {name: 'name3', artist:'Zorzete', album: 'Zorzoland', id: '03'}
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
