
import { useState } from 'react';
import './App.css';
import { useRef } from 'react';

function App() {
 const [ x, setx ] = useState([])
 const inputRef = useRef()
  const add = ()=>{
  const value = inputRef.current.value
  const newData ={completed : false , value}
  setx([...x , newData])
  inputRef.current.value=""
  }
  const itemDone =(index) =>{
  const newx =[...x]
   x[index].completed = !x[index].completed
   setx(newx)
   console.log(x)
  }
   const toDelete = (index) =>{
    const newx =[...x]
    newx.splice( index , 1)
    setx(newx)
   }


  return (
    <div className="App">
    <h2> To Do List </h2>
    <ul>
      {
      x.map(({value , completed} ,index)=>{
        return <div className='task'>
          <li className={completed ? "difstyle" : ""} onClick={() => itemDone(index)}> {value} </li>
          <span onClick={() => toDelete(index)}> x </span>
        </div>
      })
      }
    </ul>
    <input ref={inputRef} placeholder='Enter New Task....'/>
    <button onClick={add}> ADD </button>







    
    </div>
  );
}

export default App;
