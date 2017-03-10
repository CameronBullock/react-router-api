import React from 'react';

class Videos extends React.Component {
  state = { videos: ({ data: [] }) }

  componentDidMount() {
    $.ajax({
      url: '/videos',
      type: 'GET'
    }).done( videos => {
      this.setState({ videos });

    });
  }

  render() {

    let videoList = this.state.videos.data.map( video => {
      const video_id = video.uri.replace('/videos', '/video');

      return (

        <div key={video.uri} className="col s12 m6 video">
            <div className="card">
              <div className="card-image">
                <img src={video.pictures.sizes[3].link_with_play_button} alt={video.name}/>
                <iframe src={`https://player.vimeo.com${video_id}?title=0&byline=0&portrait=0&badge=0`}></iframe>
              </div>
              <div className="card-content">
                <a className="black-text" href={video.link} target="_blank"><span className="card-title">{video.name}</span></a>
                {/* <div>{video.embed.html}</div> */}
                <p className="truncate">{video.description}</p>
              </div>
            </div>
            {console.log({video})}
          </div>

      )
    });
    return (
      <div className="container">
        <div className="row video_row">
          <h1 className="center white-text">Vimeo Staff Picks</h1>
          {videoList}
        </div>
      </div>
    )
  }
}

export default Videos;
