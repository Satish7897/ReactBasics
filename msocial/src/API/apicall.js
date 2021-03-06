import React, { Component } from 'react'

export default class apicall extends Component {
    state={
        loading:true,
        person:null
    };
    async componentDidMount()
    {
     const url="https://api.randomuser.me/";
     const response= await fetch(url);
     const data= await response.json();
     console.log(data.results[0]);
     
         this.setState({
             loading:false,
             person:data.results[0]
         })
     
    }
    render() {
        return (
            <div>
                {this.state.loading?<div>..loading</div>:
                
                <div>

                    <div>{this.state.person.name.first}</div>
                    <img src={this.state.person.picture.large}/>
                </div>} 
            </div>
        )
    }
}
