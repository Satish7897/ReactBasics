import React,{useState} from 'react'

export default function HandlingForm() {
    const[name,setName]=useState({firstName:'',lastName:''})
    return (
        <form>
            <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
            <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
            <h1>Your First Name {name.firstName}</h1>
            <h1>Your First Name {name.lastName}</h1>
        </form>
    )
}
