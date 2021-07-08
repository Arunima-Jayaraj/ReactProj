import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
function App() {
  let[state,setState]=useState({name:"",email:"",password:""})
  let handlechange1=(e)=>{
    // let a={...state}
    // console.log(a,"event")
    setState({...state,name:e.target.value})
  }
  let handlechange2=(e)=>{
    setState({...state,email:e.target.value})

  }
  let handlechange3=(e)=>{
    setState({...state,password:e.target.value})

  }
  return (
    <div className="App">
     <div>
        <title>Register Form</title>
        <form onSubmit={(e)=>{e.preventDefault();console.log(state,"submit values")}}>
          <table>
            <tbody><tr>
                <td>Name :</td>
                <td><input type="text"  onChange={(e)=>handlechange1(e)}/></td>
              </tr>
              <tr>
                <td>Email :</td>
                <td><input type="email"  onChange={(e)=>handlechange2(e)}/></td>
              </tr>
              <tr>
                <td>Password :</td>
                <td><input type="password"  onChange={(e)=>handlechange3(e)}/></td>
              </tr>
              <tr>
                <td><input type="submit" defaultValue="Submit" /></td>
              </tr>
            </tbody></table>
        </form>
      </div>
    </div>
  );
}

export default App;
