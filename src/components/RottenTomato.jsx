import rottenTomato from "../assets/tomato.png"

const RottenTomato = () => {
  return (
    <>
        <div className="rotten-tomato-rate">
            <img src={rottenTomato} alt="tomato rating icon" />
            <span>97%</span>
        </div>
    </>
  )
}

export default RottenTomato