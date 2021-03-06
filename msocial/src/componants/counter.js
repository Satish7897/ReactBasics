import React, { Component } from 'react'

export default class counter extends Component {
     constructor()
     {
         super();
         this.state=({
             count:0
         })
     }
     Increament()
        {
            this.setState({
                count:this.state.count+1
            })
        }
    render() {
    
       
        return (
            <div>
                 <h1>{this.state.count}</h1>
                 <button onClick={()=>this.Increament()}>Increament Me</button>

            </div>
        )
    }
}
