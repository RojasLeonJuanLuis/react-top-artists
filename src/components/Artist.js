import React, { Component } from 'react'

class Artists extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.selectArtist = this.selectArtist.bind(this)
  }

  selectArtist() {
    this.props.onClick(this.props)
  }

  render() {
    return (
      <div className="column is-3">
        <div className="card box" onClick={this.selectArtist}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={this.props.image[3]['#text']} alt="artist" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={this.props.image[0]['#text']} alt="artist" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{this.props.name}</p>
                <p className="subtitle is-6">{this.props.artist.name}</p>
              </div>
            </div>
            <div className="content">
              <small>Oyentes: {this.props.listeners}</small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Artists;
