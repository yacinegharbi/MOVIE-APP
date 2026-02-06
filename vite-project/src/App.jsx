import { Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import Favorite from "./pages/Favorite";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./context/MovieContext";
function App() {


  return (
    <>
      <div className="grain-overlay"></div>
      <MovieProvider>
        <Navbar />
        <div>
          <main>
            <Routes>
              <Route path="/" element={<Movie />} />
              <Route path="/favorite" element={<Favorite />} />
            </Routes>
          </main>
        </div>
      </MovieProvider>
    </>
  )
}

export default App
