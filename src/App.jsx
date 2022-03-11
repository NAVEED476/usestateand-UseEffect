
import './App.css';
import { useState } from 'react';

function App() {
  const [add, setadd] = useState(0)

  const addevent= () =>{
    if(add<10){
      setadd(add+1)
    }
    else{
      setadd(0)
    }
  }
  
  return (
    <>
    <div className="App">

      <h1>{add}</h1>
      <button onClick={()=>{setadd(add+1)}}>click me </button>
      <button onClick={()=>{setadd(add-1)}}>Sub</button>
      <button onClick={()=>{setadd(add*2)}}>multiplication</button>
      <button onClick={()=>{setadd(add/2)}}>division</button>
      <button onClick={()=>{setadd(add%2)}}>Moduloo</button>
    </div>

    <div>
      <h1>it holds some holds {add} value </h1>
      <button onClick={addevent}>add</button>
    </div>


    </>
    
  );
}

export default App;
