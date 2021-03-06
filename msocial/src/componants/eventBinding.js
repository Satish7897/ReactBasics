import React, { Component } from 'react'

export default class eventBinding extends Component {
    constructor()
    {
        super();
        this.state={
            message:'Hello'
        }
    }
    change()
    { console.log("hello")
        this.setState({
            message:'world'
        })
    }
    render() {
        
        return (
            <div> 
                 <h1>{this.state.message}</h1>
                 <button onClick={this.change.bind(this)}>Change Me</button>
            </div>
        )
    }
}
