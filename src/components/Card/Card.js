import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

let message;

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  displaySignUp = ( loggedIn ) => {
    message = !loggedIn ? <div className="not-signed-in">NOPE</div> : <div></div>
    !loggedIn && this.setState({ clicked: true })
  }

  render() {
    const { movieData, loggedIn } = this.props;
    // eslint-disable-next-line
    const { title, overview, poster } = movieData;
    return (
      <div>
        <h1 className="movie-title">{title}</h1>
        <article className="card" style={{ backgroundImage: `url(${poster})` }} />
        {
          !loggedIn && message
        }
          <button onClick={() => this.displaySignUp( loggedIn )} className='favorite'></button>
        
      </div>
    );
  }
}

Card.propTypes = {
  movieData: PropTypes.object.isRequired
};

export default Card;