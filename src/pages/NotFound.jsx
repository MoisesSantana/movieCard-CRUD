import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Alert,Button, Container, Row, Col } from 'react-bootstrap';


class NotFound extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md>
            <Alert variant="danger" data-testid="404-error">
              404-error: Página não encontrada
            </Alert>
            <LinkContainer to="/">
              <Button>
                Início
              </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NotFound;
