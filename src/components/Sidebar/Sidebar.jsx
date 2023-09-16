import './Sidebar.css'
import calender from '../../assets/Calendar.svg'
import home from '../../assets/Home.svg'
import projector from '../../assets/Movie Projector.svg'
import tvShow from '../../assets/TV Show.svg'
import logout from '../../assets/Logout.svg'
import  Logo from '../Logo'

const Sidebar = () => {
  return (
    <>
        <section className='side-bar'>
            <Logo />
            <div className="side-links">
                <a href="">
                    <img src={home} alt="Home" />
                    <span>Home</span>
                </a>
                <a href="" className='active-movie'>
                    <img src={projector} alt="movies" />
                    <span>Movies</span>
                </a>
                <a href="">
                    <img src={tvShow} alt="tv series" />
                    <span>TV Series</span>
                </a>
                <a href="">
                    <img src={calender} alt="upcoming" />
                    <span>Upcoming</span>
                </a>
            </div>
            <div className="side-txt">
                <h6>Play movie quizes <br />and earn <br />free tickets</h6>
                <p>50k people are playing now</p>
                <button>Start playing</button>
            </div>
            <a href="">
                <img src={logout} alt="logout" />
                <span>Log out</span>
            </a>

        </section>
    
    </>
  )
}

export default Sidebar