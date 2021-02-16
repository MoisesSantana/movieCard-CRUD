import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { Card, Button } from 'react-bootstrap';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <Card data-testid="movie-card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ movie.imagePath } />
        <Card.Body>
          <Card.Title>{ movie.title }</Card.Title>
          <Card.Text>{ movie.storyline }</Card.Text>
          <LinkContainer to={ `/movies/${movie.id}` }>
            <Button>
              VER DETALHES
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
