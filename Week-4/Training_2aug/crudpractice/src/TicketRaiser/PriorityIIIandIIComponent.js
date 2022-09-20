import React from "react";
class PriorityIIIandII extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const styleBg={
            backgroundColor:"#a18602"
        }
        const borderstyle={
            borderStyle:'double',
            backgroundColor:'#F0FFFF'
        }
        const borderstylethree={
            borderStyle:'double',
            backgroundColor:'yellow'
        }
        const {pThreeAndTwo,changePriority,closeTicket}=this.props
        return(
            <div>
            <h2>PRIORITY-3</h2>
            {
                pThreeAndTwo.map((item)=>(
                    <div style={borderstylethree}>
                        <h3>{item.tickettimestamp}</h3>
                        <h4>{item.ticketdesc}</h4>
                        <button className='btnStyle'onClick={()=>closeTicket(item.id)}>CLOSE TICKET</button>
                        <button  className='btnStyle' onClick={()=>changePriority(item.id)}>CHANGE PRIORITY</button>
                    </div>
                ))
            }
             <h2>PRIORITY-2</h2>
            {
                pThreeAndTwo.map((item)=>(
                    <div style={borderstyle}>
                        <h3>{item.tickettimestamp}</h3>
                        <h4>{item.ticketdesc}</h4>
                        <button className='btnStyle'onClick={()=>closeTicket(item.id)}>CLOSE TICKET</button>
                        <button  className='btnStyle' onClick={()=>changePriority(item.id)}>CHANGE PRIORITY</button>
                    </div>
                ))
            }
        </div>

        )
    }
}
export default PriorityIIIandII