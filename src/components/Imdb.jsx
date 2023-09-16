import imdb from "../assets/imdb.png"

const Imdb = ({vote_average = 8.6}) => {
  return (
    <>
        <div className="imdb-rate">
            <img src={imdb} alt="imdb rating icon" />
            <span>{vote_average} / 10</span>
        </div>
    </>
  )
}

export default Imdb