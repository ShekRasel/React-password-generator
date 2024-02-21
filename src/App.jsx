import React, { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  const UC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LC = 'abcdefghijklmnopqrstuvwxyz';
  const NO = '0123456789';
  const SS = '!@#$%^&*()_+-={}[]|\:;<>,.?/';

  let [uperCase, setUperCase] = useState(false);
  let [lowerCase, setLowerCase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passLength, setPassLength] = useState(10);
  let [showpass, setShowPass] = useState('');

  const generatePass = ()=>{
    let charSet = '';
    let finalCharSet = '';
    if(uperCase || lowerCase || numbers || symbols){

      if(uperCase) charSet+=UC;
      if(lowerCase) charSet+=LC;
      if(numbers) charSet+=NO;
      if(symbols) charSet+=SS;

      for(let i=0; i<passLength; i++){
        finalCharSet+=charSet.charAt(Math.floor( Math.random()*charSet.length ));
      }
      setShowPass(finalCharSet);
    }else{
      toast.error('Please check atleast one...');
    }
  }

  const copyPass = ()=>{
    navigator.clipboard.writeText(showpass);
    toast.success('Coped');
  }
  return (
    <div className='main'>
      <ToastContainer/>
        <div className='card'>
          <h2>Password Generator</h2>

          <div className='A'>
            <input type="text" defaultValue={showpass} /> <button onClick={copyPass}>Copy</button>
          </div>

          <div className='A1'>
            <span>Password Length</span> <input type="number" max={20} min={10} value={passLength} onChange={(event)=>{setPassLength(event.target.value)}}/>
          </div>

          <div className='B'>
            <label >
              <span>Includes Upper letters</span> <input type="checkbox" checked={uperCase} onChange={()=>setUperCase(!uperCase)}/> 
            </label>
          </div>

          <div className='B'>
            <label >
              <span>Includes lower letters</span> <input type="checkbox" checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)}/> 
            </label>
          </div>

          <div className='B'>
            <label >
              <span>Includes numbers</span> <input type="checkbox" checked={numbers} onChange={()=>setNumbers(!numbers)}/> 
            </label>
          </div>

          <div className='B'>
            <label >
              <span>Includes symbols</span> <input type="checkbox" checked={symbols} onChange={()=>setSymbols(!symbols)}/> 
            </label>
          </div>
          <button className='lastbutton' onClick={generatePass}>Generate Password</button>
        </div>
    </div>
  )
}

