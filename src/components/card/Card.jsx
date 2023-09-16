import './Card.css'
import sample1 from "../../assets/sample.png"
import Imdb from '../Imdb'
import RottenTomato from '../RottenTomato'
import FavoriteBtn from '../detail/FavoriteBtn'
import { Link } from 'react-router-dom'


const Card = ({ movie }) => {
  return (
    <>
    
        <Link to={`movies/${movie.id}`} className="card" data-testid="movie-card"> 
            <div className="card-image">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.path} data-testid="movie-poster"/>
                <FavoriteBtn />
            </div>
            <div className="card-txt">
                <p className='year-released' data-testid="movie-release-date">{movie.release_date}</p>
                <h3 data-testid="movie-title">{movie.title}</h3>
                <div className="card-rating">
                   <Imdb vote_average={movie.vote_average}/>
                    <RottenTomato />
                </div>
                <p>{movie.genre_ids.map((genre_id, index) => {
                    
                })}</p>
            </div>
        </Link>
    </>
  )
}

export default Card