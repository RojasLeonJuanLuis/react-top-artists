import React, { Component } from 'react'
import api from '../services/api'
import Artist from '../components/Artist'
import Loading from '../components/shared/Loading'
import ArtistDetail from '../components/ArtistDetail'
import Title from '../components/Title'

export default class ArtistsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artists: [],
      loading: true,
      selectedArtist: '',
    }
    this.setSelectedArtist = this.setSelectedArtist.bind(this)
  }

  setSelectedArtist(dataArtists) {
    this.setState({
      selectedArtist: dataArtists,
    })
  }

  async componentDidMount() {
    const topArtists = await api.artists.getArtists()
    const artists = topArtists.tracks.track

    this.setState({
      artists,
      loading: false,
    })
  }

  render() {
    return (
      <div>
        <Title />
        <ArtistDetail selectedArtist={this.state.selectedArtist}  />
        {this.state.loading && (
          <Loading />
        )}
        <section className="columns is-multiline">
          {this.state.artists.map(artist => <Artist onClick={this.setSelectedArtist} key={artist.name} {...artist} />)}
        </section>
      </div>
    )
  }
}
