import React from "react"
import ClosedComponent from "./ClosedComponent"
import PriorityIIIandII from "./PriorityIIIandIIComponent"
import PriorityVandIV from "./PriorityVandIVComponent"




class TicketRaiser extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tasks:this.props.data
        }
    }

    reopenTicket=(itemId)=>{
        const temp=[...this.state.tasks];
        let k=temp.find((item)=>(
            item.id===itemId
        ))
        k.status=false;
        this.setState({tasks:temp})
     }
    getprioritythreeandtwo=()=>{
       const result= this.state.tasks.filter((item)=>item.priority===false&&item.status===false)
       return result
    }
    getPriorityfiveandfour=()=>{
        const result= this.state.tasks.filter((item)=>item.priority===true&&item.status===false)
        return result
     }
     changePriorityStatus=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.priority=!obj.priority
        this.setState({tasks:temp}) 
     }
     changeStatus=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.status=!obj.status
        this.setState({tasks:temp}) 
     }
     
     getClosedTicket=()=>{
        const result= this.state.tasks.filter((item)=>item.status===true)
        return result
     }

    render(){
        return(
            <div>
                <h1 className="heading">TICKET RAISER</h1>
                <PriorityVandIV pFiveAndFour={this.getPriorityfiveandfour()} changePriority={this.changePriorityStatus} closeTicket={this.changeStatus}></PriorityVandIV>
                <PriorityIIIandII pThreeAndTwo={this.getprioritythreeandtwo()} changePriority={this.changePriorityStatus} closeTicket={this.changeStatus}></PriorityIIIandII>
                <ClosedComponent closeTicket={this.getClosedTicket()} reOpenTicket={this.reopenTicket} ></ClosedComponent>
            </div>
        )
    }
}
export default TicketRaiser