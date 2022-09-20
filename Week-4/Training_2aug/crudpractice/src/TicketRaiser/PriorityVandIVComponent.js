import React from "react";
class PriorityVandIV extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const styleBg={
            backgroundColor:"white"
        }
        const borderstyle={
            borderStyle:'double',
            backgroundColor:'#e04c60'
        }
        const borderstylefour={
            borderStyle:'double',
            backgroundColor:'orange'
        }
        const {pFiveAndFour,changePriority, closeTicket}=this.props
        return(
            <div style={styleBg}>
            <h2>PRIORITY-5</h2>
            {
                pFiveAndFour.map((item)=>(
                    <div style={borderstyle}>
                        <h3>{item.tickettimestamp}</h3>
                        <h4>{item.ticketdesc}</h4>
                        <button className='btnStyle'onClick={()=>closeTicket(item.id)}>CLOSE TICKET</button>
                        <button className='btnStyle' onClick={()=>changePriority(item.id)}>CHANGE PRIORITY</button>
                    </div>
                ))
            }
            <h2>PRIORITY-4</h2>
            {
                pFiveAndFour.map((item)=>(
                    <div style={borderstylefour}>
                        <h3>{item.tickettimestamp}</h3>
                        <h4>{item.ticketdesc}</h4>
                        <button className='btnStyle'onClick={()=>closeTicket(item.id)}>CLOSE TICKET</button>
                        <button className='btnStyle' onClick={()=>changePriority(item.id)}>CHANGE PRIORITY</button>
                    </div>
                ))
            }
        </div>
        

        )
    }
}
export default PriorityVandIV