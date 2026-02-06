import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorite() {
    const { favorites } = useMovieContext();
    return (
        <>
            <div className="favorite-movies">
                <h2>Favorite Movies</h2>
                <div className="favorite-grid">
                    {favorites.length === 0 ? (
                        <div className="empty-favorites">
                            <p>Your cinematic archive is empty.</p>
                            <span>Mark movies as favorites to see them here.</span>
                        </div>
                    ) : (
                        favorites.map((movie, index) => (
                            <div key={movie.id} style={{ "--i": index }}>
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