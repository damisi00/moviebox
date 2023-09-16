import searchIcon from '../../assets/search.svg'
import './Search.css'

const SearchBar = () => {
  return (
    <>
        <div className="search-box">
            <input type="search" name="search" id="search-movie" placeholder="What do you want to watch?"/>
            <img src={searchIcon} alt='search icon'  className='search-icon'/>
        </div>
    </>
  )
}

export default SearchBar