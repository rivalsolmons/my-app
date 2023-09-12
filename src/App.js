import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import RulesHook from './component/RulesHook';
import UseStateArray from './component/UseStateArray';
// By default useEffect returns empty array 
function App() {

  //var val = "Sandy";

  // const [val, funcX] = useState('My Game');
  // const changeName = () => {
  //    //val = "Hello Sir";
  //   //  console.log(val);
  //     let dd = val;
  //     if(dd==='My Game'){
  //     funcX("Nakli Game")}
  //     else { funcX("My Game") }
  // }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Sandeepak's React App
    //       <h3>{val}</h3>
    //       <button className="btn" onClick={changeName} > Click Here</button>
    //     </p>
       
    //   </header>
      
    // </div>
    <div>
      <UseStateArray/>
    </div>
  );
}

export default App;
