import React from "react";

//L I F E   C Y C L E  O F  A   C O M P O N E N T

//INITIALIZATION PHASE (BEFORE MOUNTING)

class Child extends React.Component{
    constructor(props){
        super(props)

        this.state=({
            walk: "",
            write: "",
            speak: ""
         })
    }


    // render(){
    //     return(
    //         <div>
    //             <h1>Child Component</h1>
    //         </div>
    //     )
    // }
}

export default Child;