import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import GenreButton from '../GenreButton'
import './Detail.css'
import ExpandBtn from '../../assets/Expand Arrow.svg'
import  PlayBtn from '../../assets/Play.svg'
import Star from '../../assets/Star.svg'
import Tickets from '../../assets/Two Tickets.png'
import ListIcon from '../../assets/List.png'
import ListIcon2 from '../../assets/List2.png'
import Preview from '../../assets/preview.png'
import Logo from '../Logo'
import Loader from '../Loader';


const Detail = () => {
  const {id} = useParams();
  console.log(id)
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const API_KEY = '1f603d4618cc8d51a0e08360e9678848';
  const BASE_URL = 'https://api.themoviedb.org/3';
  

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);


    const getMovieDetails = async () => {
    
      try{
        const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
        const movies = await response.json();
        console.log(movies);
        setDetails(movies);
      } catch (error) {
        console.log(error);
      
      }
    };
    getMovieDetails();
  }, [id]);
  return (
    <>
        {loading ? (
          <Loader /> ) : 
        <main className="movie-detail">
        <Link style={{color: '#333'}} to='/' className='only-mobile'><Logo /></Link>
          <div className="video-container">
            {/* <iframe src={`http://api.themoviedb.org/3/movie/${details.id}/videos`}> 
            </iframe> */}
            <div className="play-container">
              <div className="ellipse">
              <img src={PlayBtn} alt=""  className='play-btn'/>
              </div>
            </div>
           
            
            <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} alt={details.title + 's poster'} className='wallpaper'/>
          </div>

          <section  className="full-movie-dets">
            <div className="movie-text">
              <div className="movie-headline">
                <div className='title-wrapper'>
                  <h6 data-testid='movie-title'>{details.title}</h6>  
                  <span data-testid='movie-release-date'> {Date.parse(details.release_date)}{' '}</span>  
                  <span>  PG-13</span>  
                  <span data-testid='movie-runtime'>  {details.runtime}</span>
                </div>
                <div className="movie-categories-container">
                  {/* { details.genre_ids.map((genre, index) => { */}

                  <GenreButton  />
                  {/* })} */}
                </div>
              </div>

              <p className='movie-desc' data-testid='movie-overview'>{details.overview}</p>

              <div className="cast-and-crew">
                <p>Director : <span>Joseph Kosinski</span></p>
                <p>Writers : <span>Jim Cash, Jack Epps Jr, Peter Craig</span></p>
                <p>Stars : <span>Tom Cruise, Jennifer Connelly, Miles Teller</span></p>
              </div>

              <div className="awards-noms">
                <button className='top-rated'>Top rated movie #65</button>
                <span>Awards 9 nominations</span>
                <img src={ExpandBtn} alt="expand button" />
              </div>
            </div>

            <aside >
              <div className="movie-rating">
                <img src={Star} alt="star icon" />
                  <h5><span>{details.vote_average}</span>| 350k</h5>
              </div>

              <button>
                <img src={Tickets} alt="tickets icon" />
                <span>See Showtimes</span>
              </button>

              <button className='watch-options-btn'>
                <img src={ListIcon} alt="list icon" />
                <span>More watch options</span>
              </button>

              <div className="best-movies">
                <img src={Preview} alt="" className='best-img'/>
                <button>
                  <img src={ListIcon2} alt="list icon" />
                  <span>The Best Movies and Shows in September</span>
                </button>
              </div>
            </aside>
          </section>
        </main>
        };
    </>
  )
}

export default Detail