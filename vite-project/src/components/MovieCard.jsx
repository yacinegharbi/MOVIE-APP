import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
    const { addtofavorites, isFavorite, removefromfavorites } = useMovieContext();
    const movieIsFavorite = isFavorite(movie.id);

    function handleradd(e) {
        e.preventDefault();
        if (movieIsFavorite) {
            removefromfavorites(movie.id);
        } else {
            addtofavorites(movie);
        }
    }
    return (

        <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="movie-overlay">
                    <button className={`favorite-btn ${movieIsFavorite ? "favorite" : ""}`} onClick={handleradd}>
                        {movieIsFavorite ? "❤️" : "🤍"}
                    </button>
                </div>
                <div className="movie-info">
                    <h2>{movie.title}</h2>
                    <p>{movie.release_date.slice(0, 4)}</p>

                </div>
            </div>
        </>

    )
}
export default MovieCard;