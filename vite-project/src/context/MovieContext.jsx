import { createContext, useContext, useState, useEffect } from "react";



const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
    const addtofavorites = (movie) => {
        if (favorites.some(fav => fav.id === movie.id)) return;
        setFavorites([...favorites, movie]);
        alert("Movie added to favorites");
    }
    const removefromfavorites = (movieId) => {
        setFavorites(favorites.filter((favorite) => favorite.id !== movieId));
        alert("Movie removed from favorites");
    }
    const isFavorite = (movieId) => {
        return favorites.some((favorite) => favorite.id === movieId);
    }
    return <MovieContext.Provider value={{ favorites, addtofavorites, removefromfavorites, isFavorite }}>
        {children}
    </MovieContext.Provider>
}
