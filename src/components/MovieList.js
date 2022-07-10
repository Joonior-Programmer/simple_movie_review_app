import styles from "./MovieList.module.css";

function MovieList({ title, genres, cover, summary, rating }) {
  console.log(cover);
  return (
    <div className={styles.container}>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
      <span>{summary}</span>

      <ul className={styles.ul}>
        <p className={styles.li}>Genre</p>
        {genres.map((genre) => (
          <li key={genre} className={styles.li}>
            {genre}
          </li>
        ))}
      </ul>
      <div className={styles.rating}>
        <span>
          <strong>★{rating}</strong>
        </span>
      </div>
    </div>
  );
}

export default MovieList;
