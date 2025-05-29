// Movie.jsx
import './App.css';

function Movie({ name, year, rating }) {
  // just testing how props get passed to each movie
  // making sure each value displays correctly

  return (
    <div className="movie-card">
      <h2>{name}</h2> {}
      <p>Year: {year}</p> {}
      <p>Rating: {rating}</p> {}
    </div>
  );
}

export default Movie;
