import './Sidebar.css'
import calender from '../../assets/Calendar.svg'
import home from '../../assets/Home.svg'
import projector from '../../assets/Movie Projector.svg'
import tvShow from '../../assets/TV Show.svg'
import logout from '../../assets/Logout.svg'
import  Logo from '../Logo'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
        <section className='side-bar'>
            <Logo />
            <div className="side-links">
                <Link to="/">
                    <img src={home} alt="Home" />
                    <span>Home</span>
                </Link>
                <Link to="" className='active-movie'>
                    <img src={projector} alt="movies" />
                    <span>Movies</span>
                </Link>
                <Link to="">
                    <img src={tvShow} alt="tv series" />
                    <span>TV Series</span>
                </Link>
                <Link to="">
                    <img src={calender} alt="upcoming" />
                    <span>Upcoming</span>
                </Link>
            </div>
            <div className="side-txt">
                <h6>Play movie quizes <br />and earn <br />free tickets</h6>
                <p>50k people are playing now</p>
                <button>Start playing</button>
            </div>
            <Link to="">
                <img src={logout} alt="logout" />
                <span>Log out</span>
            </Link>

        </section>
    
    </>
  )
}

export default Sidebar