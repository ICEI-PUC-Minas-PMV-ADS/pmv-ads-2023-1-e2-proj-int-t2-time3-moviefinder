import './MovieCard.css'

function MovieCard(props) {

  console.log(props.posterSize);
  console.log(props.movie);
  
  return (
    <div className='movie-card-all'>
      <div className="movie-card"  style={{ width: props.posterSize || "auto" }}>
          <div className='movie-card-img'>
            <img src={"https://image.tmdb.org/t/p/w185" + props.movie?.poster_path} alt="cards" />
          </div>
        <div className='movie-card-titulo'>
            <h2>{props.movie?.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
