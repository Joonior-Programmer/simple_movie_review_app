import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import styles from "./Home.module.css";

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
    <div className={styles.container}>
      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.li}>
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
