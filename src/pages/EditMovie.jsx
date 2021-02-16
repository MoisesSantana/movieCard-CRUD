import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.callAPI = this.callAPI.bind(this);

    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.callAPI();
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

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    if (loading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
