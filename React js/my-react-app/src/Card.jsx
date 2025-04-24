import React_img from "./assets/react.svg"
import './Card.css'
const Card = () => {
  return (
    <div className="Card">
        <img src={React_img}/>
        <h1> React </h1>
        <p>React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.</p>
    </div>
  )
}

export default Card