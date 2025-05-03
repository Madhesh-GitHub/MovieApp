import MovieCard from "../components/MovieCard";
import {useState} from "react";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const movies=[
        { id: 1, title: "Interstellar", release_date: "2023-01-01" },
        { id: 2, title: "Inception", release_date: "2023-02-01" },
        { id: 3, title: "The Matrix", release_date: "2023-03-01" },
        { id: 4, title: "Pursuit of Happyness", release_date: "2023-04-01" },
        { id: 5, title: "Forest Gump", release_date: "2023-05-01" },
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="serach-form">
                <input type="text" placeholder="Search for movies..." className="search-input" 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key = {movie.id} /> 
                ))}
            </div>
        </div>
    )
}

export default Home;