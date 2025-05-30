
import Card from 'react-bootstrap/Card';
import './App.css';

function Movie({ title, year, rating, poster }) {
  // Confirming props display correctly and swapping out custom styling for Bootstrap

  return (
    // attempting to use Bootstrap's Card component for styling bonus marks
    <Card className="mb-4 shadow-sm" style={{ width: '100%', maxWidth: '250px' }}>
      <Card.Img 
        variant="top" 
        src={poster} 
        alt={`${title} poster`} 
        style={{ height: '350px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text><strong>Year:</strong> {year}</Card.Text>
        <Card.Text><strong>Rating:</strong> {rating}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Movie;