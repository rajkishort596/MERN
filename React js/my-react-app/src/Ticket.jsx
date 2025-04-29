import TicketNum from "./TicketNum"
import "./Ticket.css"
const Ticket = ({ticket,isWinner}) => {
  return (
    <div className={`Ticket ${isWinner ? "winner" : ""}`}>
      {ticket.map((num,ind)=>(
         <TicketNum num ={num} key={ind}/>
      ))}
    </div>
  )
}

export default Ticket
