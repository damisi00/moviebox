import Navbar from "./nav/Navbar"
import imdb from "../assets/imdb.png"
import rottenTomato from "../assets/tomato.png"
import playIcon from "../assets/Play.svg"
import Imdb from "./Imdb"
import RottenTomato from "./RottenTomato"


const Hero = () => (
    <>
        <main className='hero-section'>
            <div className="container">
                <Navbar />
                <aside className="hero-text">
                    <h1>John Wick 3 : Parabellum</h1>
                    <div className="hero-rating">
                       <Imdb />
                        <RottenTomato />
                    </div>
                    <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>

                    <button type="" > 
                        <img src={playIcon} alt="play icon" />
                        <span>Watch Trailer</span>
                    </button>
                </aside>
            </div>

        </main>
    </>
)

export default Hero