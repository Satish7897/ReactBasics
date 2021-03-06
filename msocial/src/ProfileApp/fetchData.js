import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './style.css'
export default class fetchData extends Component {
    constructor()
    {
        super();
        this.state=({
            isLoad:false,
            personData:null
        })
    }
    async componentDidMount()
    {
       const api='https://randomuser.me/api/?results=5';
       const response=await fetch(api);
       const data= await response.json();
       this.setState({
        isLoad:true,
        personData:data.results
    })

    }
    render() {
        return (
            <div>
                {this.state.isLoad?<div>
                    {this.state.personData.map( (person)=>{
                        return(
                            <div>
                               <h1>{person.name.first}</h1>
                               <div >
                               <img src={person.picture.medium}/>
                                </div>
                            
                            </div>
                               
                        );
                    })}
                </div>:<div>...Loading</div>}
            </div>
        )
    }
}
