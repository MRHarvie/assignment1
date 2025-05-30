
import Movie from './Movie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieList({ movies }) {
  // Bootstrap grid system to display cards
  // Wrapping each Movie component inside a Col for better layout

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Movie List</h2>

      <Row className="g-4 justify-content-center">
        {movies.map((movie, index) => (
          <Col 
            key={index} 
            xs={12} sm={6} md={4} lg={3} 
            className="d-flex justify-content-center"
          >
            <Movie
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              poster={movie.poster}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MovieList;