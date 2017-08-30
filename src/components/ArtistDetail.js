import React, { Component } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'

class ArtistDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      artistDetail: true,
    }
    this.artistDetailIsOpen = this.artistDetailIsOpen.bind(this)
    this.noArtistsDetails = this.noArtistsDetails.bind(this)
  }

  artistDetailIsOpen() {
    if(this.state.artistDetail === true && this.props.selectedArtist) {
      return (
        <div className="overlay">
          <p className="is-size-3 cross" onClick={this.noArtistsDetails}>╳</p>
          <div className="box modal-container">
            <img src={this.props.selectedArtist.image[3]['#text']} alt={this.props.selectedArtist.artist.name} />
            <p className="is-size-4">{this.props.selectedArtist.name}</p>
            <p className="is-size-5">{this.props.selectedArtist.artist.name}</p>
            <a className="is-size-3" href={this.props.selectedArtist.url} rel="noopener noreferrer" target="_blank"><span role="img" aria-label="earth">🌏</span></a>
          </div>
        </div>
      )
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      artistDetail: true,
    })
  }

  noArtistsDetails() {
    this.setState({
      artistDetail: false,
    })
  }

  render() {
    return (
      <div>
        <CSSTransitionGroup
          transitionName="modal"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {this.artistDetailIsOpen()}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default ArtistDetail
