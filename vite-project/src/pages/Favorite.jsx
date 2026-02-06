import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorite() {
    const { favorites } = useMovieContext();
    return (
        <>
            <div className="favorite-movies">
                <h2>Favorite Movies</h2>
                <div className="favorite-movies-grid">
                    {favorites.length === 0 ? (
                        <p>No favorite movies yet</p>
                    ) : (
                        favorites.map((movie) => (
                            <div key={movie.id}>
                                <MovieCard movie={movie} />
                            </div>
                        ))
                    )}
                </div>

            </div>
        </>
    )
}
export default Favorite 