import React,{Component} from 'react';
class Message extends Component{
    constructor(){
        super();
        this.state={
            message:'Welcome Visitor',
            Count:0,
        }
    }
    changeMessage(){
        this.setState({
        
            Count:this.state.Count+1
        })
    }
    IncreamentFive(){
        this.setState({
            Count:this.state.Count+5
        })
    }
        render(){

           return( <div>
                 <h1>{this.state.Count}</h1>
                <button onClick={()=>this.IncreamentFive()}>Subsribe</button>
            </div>);
          
        }
    
}
export default Message