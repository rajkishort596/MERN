import React, { useState } from 'react'
import Ticket from './Ticket'
import "./Lottery.css"
import {genTicket} from "./helper.js"
const Lottery = ({n , winCondition}) => {
  const [ticket, setTicket] = useState(genTicket(n))
  let isWinner = winCondition(ticket);
  const buyTicket =()=>{
    setTicket(genTicket(n))
  }
  return (
    <div className='Lottery'>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} isWinner = {isWinner}/>
      <button onClick={buyTicket}>Buy New Ticket</button>
      {isWinner?"Congratulations You Won 🎉":""}
    </div>
  )
}

export default Lottery