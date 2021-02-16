import React from 'react';
import { Button, Form, Container, Col, Row } from 'react-bootstrap';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <Row>
        <Form.Label htmlFor="movie_title">Título</Form.Label>
        <Form.Control
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate"
          value={title}
          onChange={ (event) => this.updateMovie('title', event.target.value) }
        />
      </Row>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <Row>
        <Form.Label htmlFor="movie_subtitle">Subtítulo</Form.Label>
        <Form.Control
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
        />
      </Row>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <Row>
        <Form.Label htmlFor="movie_image">Imagem</Form.Label>
        <Form.Control
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          value={ imagePath }
          onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
        />
      </Row>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <Row>
        <Form.Label htmlFor="movie_storyline">Sinopse</Form.Label>
        <Form.Control
          as="textarea"
          id="movie_storyline"
          value={ storyline }
          onChange={ (event) => this.updateMovie('storyline', event.target.value) }
        />
      </Row>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <Col>
        <Form.Label htmlFor="movie_genre">Gênero</Form.Label>
        <Form.Control
          as="select"
          id="movie_genre"
          value={genre}
          onChange={(event) => this.updateMovie('genre', event.target.value)}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="fantasy">Fantasia</option>
        </Form.Control>
      </Col>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <Col>
        <Form.Label htmlFor="movie_rating">Avaliação</Form.Label>
        <Form.Control
          placeholder="0 - 5"
          id="movie_rating"
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={rating}
          onChange={(event) => this.updateMovie('rating', event.target.value)}
        />
      </Col>
    );
  }

  renderSubmitButton() {
    return (
      <Row>
        <Button
          type="button"
          onClick={ this.handleSubmit }
        >
          Submit
        </Button>
      </Row>
    );
  }

  render() {
    return (
      <Container fluid="md">
        <Form>
          <Form.Group>
            <Col>
              { this.renderTitleInput() }
              { this.renderSubtitleInput() }
              { this.renderImagePathInput() }
              { this.renderStorylineInput() }
            </Col>
            <Row>
              { this.renderGenreSelection() }
              { this.renderRatingInput() }
            </Row>
          </Form.Group>
          { this.renderSubmitButton() }
        </Form>
      </Container>
    );
  }
}

export default MovieForm;
