import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import {
  Button,
  Card,
  Container,
  ListGroup,
  ListGroupItem,
  ButtonGroup,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class MovieDetails extends Component {
  constructor() {
    super();

    this.callAPI = this.callAPI.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.callAPI();
  }

  async deleteMovie() {
    const { id } = this.state.movie;

    await movieAPI.deleteMovie(id);
  }

  callAPI() {
    const { id } = this.props.match.params;

    this.setState({ loading: true }, async () => {
      const movie = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie,
      });
    });
  }

  render() {
    const { loading } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    if (loading) return <Loading />;

    return (
      <Container data-testid="movie-details">
        <Card>
          <Card.Header>{ subtitle }</Card.Header>
          <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Img variant="top" alt="Movie Cover" src={ `../${imagePath}` } />
            <Card.Text>{ storyline }</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{ genre }</ListGroupItem>
            <ListGroupItem>{ rating }</ListGroupItem>
          </ListGroup>
          <ButtonGroup>
            <LinkContainer to="/">
              <Button>
                VOLTAR
              </Button>
            </LinkContainer>
            <LinkContainer to={ `/movies/${id}/edit` }>
              <Button>
                EDITAR
              </Button>
            </LinkContainer>
            <LinkContainer to="/" onClick={ this.deleteMovie }>
              <Button variant="danger">
                DELETAR
              </Button>
            </LinkContainer>
          </ButtonGroup>
        </Card>
        
      </Container>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
