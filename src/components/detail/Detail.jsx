import { Link } from 'react-router-dom'
import GenreButton from '../GenreButton'
import './Detail.css'
import ExpandBtn from '../../assets/Expand Arrow.svg'
import Star from '../../assets/Star.svg'
import Tickets from '../../assets/Two Tickets.png'
import ListIcon from '../../assets/List.png'
import ListIcon2 from '../../assets/List2.png'
import Preview from '../../assets/preview.png'
import Logo from '../Logo'

const Detail = () => {
  return (
    <>
     
        <main className="movie-detail">
        <Link style={{color: '#333'}} to='/moviebox' className='only-mobile'><Logo /></Link>
          <div className="video-container">
            <video data-testid='movie-overview' controls>
              <source src="" type="video/mp4" /> 
              <source src="" type="video/ogg" />
              Your browser does not support the video tag.-
            </video>
          </div>

          <section  className="full-movie-dets">
            <div className="movie-text">
              <div className="movie-headline">
                <div className='title-wrapper'>
                  <h6 data-testid='movie-title'>Top Gun: Maverick </h6>  
                  <span data-testid='movie-release-date'>•    2022</span>  
                  <span>•   PG-13</span>  
                  <span data-testid='movie-runtime'>•   2h 10m </span>
                </div>
                <div className="movie-categories-container">
                  <GenreButton />
                </div>
              </div>

              <p className='movie-desc'>After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.</p>

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
                  <h5><span>8.5 </span>| 350k</h5>
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
    </>
  )
}

export default Detail