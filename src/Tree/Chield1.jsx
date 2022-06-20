import React,{useState} from 'react';
import * as axios from 'axios'; 

const  Chield1 = () =>{

   const [name, setName] = useState('');

 const handleNameChange = (e)=>{
   setName(e.target.value)
 }
 const handleSubmit = () =>{
   axios({
    method: 'POST',
    url: 'http://localhost:8000/api/test',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      name
    },
  })
    alert("Added Successfully....!!");
 }

  return(
    <div>
      <input type="text" placeholder='Enter Name'  onChange={handleNameChange} />
      <button type = "button" onClick={handleSubmit}>ADD</button>
      </div>
  )
}
export default Chield1;