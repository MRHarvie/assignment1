import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie, index) => (
        <Movie
          key={index}
          name={movie.name}
          year={movie.year}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
