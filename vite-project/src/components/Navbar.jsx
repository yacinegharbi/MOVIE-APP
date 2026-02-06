import { Link } from "react-router-dom"
function Navbar() {
    return (
        <>

            <nav>
                <div className="nav-bar">
                    <Link to="/">Movie App</Link>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/favorite">Favorite</Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
