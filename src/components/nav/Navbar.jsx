import Logo from '../Logo'
import SearchBar from '../search/SearchBar'
import menu from '../../assets/Menu.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav>
        
            <Logo style={{color: '#fff'}}/>
            <SearchBar className='desktop-search'/>
            <a className='sign-in-btn'>
                <h6>Sign in</h6>
                <img src={menu} alt="sign in icon" />
            </a>
        </nav>

        <div className="mobile-menu">
          <SearchBar />
        </div>
        
    
    </>
  )
}

export default Navbar