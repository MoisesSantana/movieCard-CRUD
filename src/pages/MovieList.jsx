import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Container, Button } from 'react-bootstrap';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.callAPI = this.callAPI.bind(this);
    this.flexLayout = this.flexLayout.bind(this);

    this.state = {
      loading: true,
      movies: [],
    }
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    this.setState({ loading: true }, async () => {
      const movies = await movieAPI.getMovies();
      this.setState((previousState) => ({
        loading: false,
        movies: [...previousState.movies, ...movies],
      }));
    });
  }

  flexLayout() {
    const expectedStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
    };

    return expectedStyle;
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />

    return (
      <Container data-testid="movie-list" fluid>
        <div style={ this.flexLayout() }
        >
          {
            movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
          }
        </div>
        <LinkContainer to="movies/new">
          <Button variant="secondary">ADICIONAR CARTÃO</Button>
        </LinkContainer>
      </Container>
    );
  }
}

export default MovieList;
