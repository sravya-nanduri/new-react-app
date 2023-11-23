import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [msg,setMsg]=useState([]);
  useEffect(()=>{
    fetch("http://43.204.97.133:5000/data")
    .then((response) => response.json())
      .then((data)=>{
        console.log(data)
        setMsg(data.data)
      })
      .catch((error) => console.error("Error fetching data", error));
  },[])
  console.log(msg)
  return (
    <div>
      Hello
      NOOOOOOO
      {msg.map(m1=>
        <div>
	  HI
          {m1.id}
          </div>
      )}
    </div>
  );
}

export default App;
