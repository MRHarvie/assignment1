// Movie.jsx
import './App.css';

function Movie({ title, year, rating, poster }) {
  // confirming values display correctly

  return (
    // Adding in movie posters for those sweet potential bonus points!
    <div className="movie-card">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={poster} 
          alt={`${title} poster`} 
          style={{ width: '100px', height: '150px', objectFit: 'cover', marginRight: '20px', borderRadius: '8px' }}
        />
        <div>
          <h3>{title}</h3>
          <p><strong>Year:</strong> {year}</p>
          <p><strong>Rating:</strong> {rating}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
