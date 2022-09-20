import React from "react";
class ClothingProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productDetails: [],
            search: '',
            result: []
        }
    }
    static getDerivedStateFromProps(props, state) {
        return { productDetails: props.data }
    }
    handleChange = (event) => {
        //console.log(event.target.value)
        this.setState({ search: event.target.value })
    }
    handleSearch = (event) => {
        event.preventDefault()
        let data = this.state.productDetails.filter((item) => item.category === this.state.search)
        this.setState({ result: data })
    }
    render() {
        return (
            
            <div>

                {/* ---------------------------------- */}
                <form>
                    {/* <input type='text' placeholder="enter product name" onChange={(e)=>this.handleChange(e)}></input>
            <button onClick={(e)=>this.handleSearch(e)}>search</button> */}
                    <h1 className="heading">SEARCH YOUR PRODUCT HERE</h1>
                    <div class="search-box">
                        <button onClick={(e) => this.handleSearch(e)} class="btn-search"><i class="fa fa-search" aria-hidden="true"></i></button>
                        <input type="text" class="input-search" placeholder="Type to Search..." onChange={(e) => this.handleChange(e)} />
                    </div>
                </form>
                {
                    this.state.result.map((item) => (
                        <div className="card">
                            {/* <img className="image" src={item.img}>image</img> */}
                            <div className="cards">
                                <img src=""></img>
                                <h2>Product:{item.pName}</h2>
                                <p>Price:{item.price}</p>
                                <p>Manufacturer:{item.manufacturer}</p>
                            </div>
                        </div>
                    ))
                }
            </div>)

    }
}
export default ClothingProducts