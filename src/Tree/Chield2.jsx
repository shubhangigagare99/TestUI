import React,{useState} from 'react';
import * as axios from 'axios'; 
import Chield3 from './Chield3';

const  Chield2 = () =>
{
   const [id, setId] = useState('');
   const [show, setShow] = useState(false);
   const handlechiled =()=>{
     setShow(true)
   } 

 const handleNameChange = (e)=>{
  setId(e.target.value)
 }

 const handleSubmit = () =>{
  axios({
   method: 'DELETE',
   url: 'http://localhost:8000/api/test/',
   data: {
    originalId:id
   },
 })
  alert("Deleted Successfully....!!");
}

  return(
    <div>
      <input type="text" placeholder='Enter Original Id' onChange={handleNameChange} />
      <button type = "button" onClick={handleSubmit}>DELETE</button>
      <button type = "button" onClick={handlechiled}>Show in table</button>
      {show && ( <> <Chield3/> </>)}
      </div>
  )
}

export default Chield2;