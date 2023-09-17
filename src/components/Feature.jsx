
import Card from "./card/Card.jsx"
import { useState, useEffect } from "react"


const d = new Date();
const Feature = () => {
  
  const API_KEY = '1f603d4618cc8d51a0e08360e9678848';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    getMovies();
    }, []);


    const getMovies = async () => {
    
      try{
        const response = await fetch(`${BASE_URL}/movie/top_rated/?api_key=${API_KEY}`);
        const movies = await response.json();
        // console.log(movies);
        setTopRated(movies.results.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    };
  
  return (
    <>
      <section className="container">
        <header  className="features-heading">
            <h2>Featured Movie</h2>
            <a className="see-more" href=""> 
                <span>See more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
        </header>
        
        <section className="card-wrapper">
        {topRated.map(movie => {
          return <Card key={movie.id} movie={movie}/>;
        })}
        </section>
       
      </section>
    </>
  )
}

export default Feature