import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          poster={movie.poster} 
        />
      ))}
    </div>
  );
}

export default MovieList;