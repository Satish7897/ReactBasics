import React, { Component } from 'react'
import './style.css'

export default class conditionalRending extends Component {
    constructor()
    {
        super();
        this.state=({
             isLogged:false
        })
    }
    change()
    {
        if(this.state.isLogged)
        {
            this.setState({
                isLogged:false
            })
        }
        else{
            this.setState({
                isLogged:true
            })
        }
        console.log(this.state.isLogged);
    }
    render() {
        
       if(this.isLogged)
       { return (
            <div>
                <h1>I am Member</h1>
                <button onClick={this.change.bind(this)}>change status</button>
             </div>
        )
    }
    else{
        return (
            <div>
                
                <h1>I am guest</h1>
                <button onClick={this.change.bind(this) } className='Button'>chnage status</button>
            
             </div>
        )
    } 
    }
}
