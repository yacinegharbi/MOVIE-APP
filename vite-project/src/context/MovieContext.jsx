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
        setFavorites([...favorites, movie]);
        alert("Movie added to favorites");
    }
    const removefromfavorites = (movie) => {
        setFavorites(favorites.filter((favorite) => favorite.id !== movie.id));
        alert("Movie removed from favorites");
    }
    const isFavorite = (movie) => {
        return favorites.some((favorite) => favorite.id === movie.id);
    }
    return <MovieContext.Provider value={{ favorites, addtofavorites, removefromfavorites, isFavorite }}>
        {children}
    </MovieContext.Provider>
}
