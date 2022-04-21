import React, { useState } from "react"

import './App.css';
import  SwitchColorButton from "./SwitchColorButton";

function App() {
  
  const [color, setColor] = useState("")
    console.log(color)

  return (
       <div className={ `react-root ${color} `}>
      <div className='centered'>
        <h1>Color Picker</h1>

         <SwitchColorButton color="red" setColor={ setColor }/>
         <SwitchColorButton color="blue" setColor={ setColor }/>
         <SwitchColorButton color="yellow" setColor={ setColor }/>


         <button className='red' onClick= { () => setColor("red") } >Red</button>
         <button className='blue'onClick= { () => setColor("blue") } >Blue</button>
         <button className='yellow'onClick= { () => setColor("yellow") } >Yellow</button>
         
      </div>
      
    </div>
  )
}

export default App;
