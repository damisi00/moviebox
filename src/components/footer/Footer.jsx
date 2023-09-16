import './Footer.css'
import facebook from '../../assets/fa-brands_facebook-square.svg'
import instagram from '../../assets/fa-brands_instagram.svg'
import twitter from '../../assets/fa-brands_twitter.svg'
import youtube from '../../assets/fa-brands_youtube.svg'

const Footer = () => {
  return (
    <>
     <footer >
        <div className="socials">
            <a href=''>
                <img src={facebook} alt="facebook icon "  />
            </a>
            <a href=''>
                <img src={instagram} alt="instagram icon"  />
            </a>
            <a href=''>
                <img src={twitter} alt="twitter icon"  />
            </a>
            <a href=''>
                <img src={youtube} alt="youtube icon"  />
            </a>
        </div>

        <ul>
            <li><a href=''>Conditions of Use</a></li>
            <li><a href=''>Privacy & Policy</a></li>
            <li><a href=''>Press Room</a></li>
        </ul>
        <h5>© 2023 MovieBox by bugszuck</h5>
     </footer>
    </>
  )
}

export default Footer