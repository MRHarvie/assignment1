function Movie({ name, year, rating }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Year: {year}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default Movie;
