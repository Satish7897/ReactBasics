import "./App.css";
import React,{ Component } from "react";
// import Message from './componants/stateInReactJs'
// import Greet from './componants/greet'
// import EventBinding from './componants/eventBinding'
// import Condition from './componants/conditionalRending'
// import Counter_ from './componants/counter'
// import counter from "./componants/counter";
// import UseStateFunction from './componants/counterUsingFunctional';
 import MakeCallfrom from './API/apicall';
// import Use1 from './Hooks/2'
import Profile from './ProfileApp/fetchData'
// import FromHandling from './componants/HandlingForm'
class App extends Component{
  render()
  {
    return(
      <div className="App">
      
        {/* <Greet name="Satish " classType="A"/>
        
        <EventBinding/> */}
        {/* <Condition/> */}
       {/* <Message/> */}
       
       {/* <Use1/> */}

       {/* <Counter_/> */}
       {/* <UseStateFunction/> */}
       {/* <MakeCallfrom/> */}
       <Profile/>
        </div>
    );
  }
}
export default App;