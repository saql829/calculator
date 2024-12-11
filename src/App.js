import { useState } from 'react';
import './App.css';

function App() {
  return (

    <div className='container'>
      <div className='calculator'>
        <form action="">
          <div>
             
           <input type='text'></input>
          </div>
          <div>
            <input type='button' value="Ac"/>
            <input type='button' value="DE"/>
            <input type='button' value="."/>
            <input type='button' value="/"/>
          </div>
          <div>
            <input type='button' value="7"/>
            <input type='button' value="8"/>
            <input type='button' value="9"/>
            <input type='button' value="*"/>
          </div>
          <div>
            <input type='button' value="6"/>
            <input type='button' value="5"/>
            <input type='button' value="4"/>
            <input type='button' value="-"/>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default App;
