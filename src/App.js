import React from "react";
import axios from "axios";
import Movie from "./components/Movie";

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }
    
    getMovie = async () => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
        this.setState({movies, isLoading: false});
    }

    componentDidMount() {
        this.getMovie();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <React.StrictMode>
                <main>
                    { isLoading ? (
                        <div class="loader">
                            <span className="loader__text">Loading...</span>
                        </div>
                    )
                     : (
                        <div class="movies">
                            {
                                movies.map(movie => (
                                    <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
                                    )
                                )
                            }
                        </div>
                    )
                    }
                </main>
            </React.StrictMode>
        );
    }
}

export default App;
