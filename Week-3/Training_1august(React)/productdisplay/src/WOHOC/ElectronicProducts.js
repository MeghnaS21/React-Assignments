import React from "react";
class ElectronicProducts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productDetails:[],
            search:'',
            result:[]
        }
    }
    static getDerivedStateFromProps(props,state){
        return {productDetails:props.data}
    }
    handleChange=(event)=>{
        //console.log(event.target.value)
        this.setState({search:event.target.value})
    }
    handleSearch=(event)=>{
        event.preventDefault()
        let data=this.state.productDetails.filter((item)=>item.pName===this.state.search)
        this.setState({result:data}) 
    }
    render(){
      
        return(
            <div>
                <form>
                    <input type='text' placeholder="enter product name" onChange={(e)=>this.handleChange(e)}></input>
                    <button onClick={(e)=>this.handleSearch(e)}>search</button>
                </form>
                {
                    this.state.result.map((item)=>(
                        <div class="card">
                            <h2>Product:{item.pName}</h2>
                            <p>Price:{item.price}</p>
                            <p>Manufacturer:{item.manufacturer}</p>
                        </div>
                    //     <div class="card" style="width: 18rem;">
                    //     <img src="..." class="card-img-top" alt="..."/>
                    //     <div class="card-body">
                    //       <h5 class="card-title">Product:{item.pName}</h5>
                    //       <p>Price:{item.price}</p>
                    //       <p class="card-text">Manufacturer:{item.manufacturer}</p>
                    //     </div>
                    //   </div>
                    ))
                }
                
            </div>
        )
    }
}
export default ElectronicProducts