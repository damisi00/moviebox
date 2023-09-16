import { useRouteError } from "react-router-dom"
import ErrImg from '../assets/error.png'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  return ( 
    <div className=" err-msg">
        <img src={ErrImg} alt="error img" />
        <div className="err-txt">
            <h1>404</h1>
            <h3>There's NOTHING here...</h3>
        </div>
        
        {/* <i>{error.statusText || error.message }</i> */}
    </div>
  )
}

export default ErrorPage