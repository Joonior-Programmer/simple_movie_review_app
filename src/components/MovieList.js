function MovieList({ title, genres, cover, summary, rating }) {
  console.log(cover);
  return (
    <div>
      <img src={cover} />
      <h3>{title}</h3>
      <span>{summary}</span>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <span>
        <strong>★{rating}</strong>
      </span>
    </div>
  );
}

export default MovieList;
