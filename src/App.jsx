import './App.css';
import NavBar from './NavBar';
import MovieList from './MovieList';
import moviesData from './movies.json';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieList movies={moviesData} />
    </div>
  );
}

export default App;
