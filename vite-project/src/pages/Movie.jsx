import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { fetchSearchMovies, fetchTrendingMovies } from "../services/Api";
function Movie() {
    const [searchquery, setSearchquery] = useState("");
    const [Movies, setMovies] = useState([]);
    const [erro, seterro] = useState(null);
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const loadpupolairMovies = async () => {
            try {
                const poplaireMovies = await fetchTrendingMovies();
                setMovies(poplaireMovies);
            } catch (erro) {
                console.log(erro)
                seterro("someting want wrong....");
            }
            finally {
                setloading(false)
            }
        }
        loadpupolairMovies();
    }, []);

    const handlersub = async (e) => {
        e.preventDefault();
        if (!searchquery.trim()) {
            alert("Please enter a search query");
            return;
        }
        if (loading) {
            return;
        }
        setloading(true);
        try {
            const searchMovies = await fetchSearchMovies(searchquery);
            setMovies(searchMovies);
            seterro(null);
        }
        catch (erro) {
            console.log(erro)
            seterro("something want wrong....");
        }
        finally {
            setloading(false)
        }

    }


    return (
        <>
            <div className="app-container">
                <form onSubmit={handlersub} className="search-form">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="search-input"
                        value={searchquery}
                        onChange={(e) => setSearchquery(e.target.value)}
                    />
                    <button type="submit" className="search-btn">Search</button>
                </form>
                {erro && <div className="error">{erro}</div>}
                {loading ? (
                    <div className="loading">Loading... </div>
                ) : (
                    <div className="movies-grid">
                        {Movies.map((movie) => (
                            <div key={movie.id} >
                                <MovieCard movie={movie} />
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </>
    )

}
export default Movie