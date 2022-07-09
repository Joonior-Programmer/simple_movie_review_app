import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movieList = await (
        await fetch("https://yts.mx/api/v2/list_movies.json")
      ).json();
      setMovies(movieList.data.movies);
    };
    getMovies();
  }, []);

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieList
              title={movie.title_long}
              genres={movie.genres}
              cover={movie.medium_cover_image}
              summary={movie.summary}
              rating={movie.rating}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
