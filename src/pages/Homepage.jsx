import { useState, useEffect } from 'react';
import Hero from "../components/Hero"
import Feature from "../components/Feature"
import Footer from "../components/footer/Footer.jsx"
import Loader from '../components/Loader';

const Homepage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>

      {loading ? (
          <Loader /> ) : 
        (<div>
          <Hero />
          <Feature />
          <Footer />
        </div>
        
              )};
    </>
  )
}

export default Homepage