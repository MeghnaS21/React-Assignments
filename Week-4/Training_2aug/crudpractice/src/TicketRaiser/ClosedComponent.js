import React from "react";
class ClosedComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const styleBg={
            backgroundColor:"aqua"
        }
        const borderstyle={
            borderStyle:'double',
            backgroundColor:'green'
        }
        const {closeTicket, reOpenTicket }=this.props
        return(
            <div >
                <h2>CLOSED TICKET</h2>
                {
                    closeTicket.map((item)=>(
                        <div style={borderstyle}>
                            <h3>{item.tickettimestamp}</h3>
                            <h4>{item.ticketdesc}</h4>
                            <button  className='btnStyle' onClick={()=>reOpenTicket(item.id)}>RE-OPEN TICKET</button>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default ClosedComponent