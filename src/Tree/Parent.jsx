import React,{useState} from 'react';
import Chield1 from './Chield1';
import Chield2 from './Chield2';

const Parent = () => {
  const [show, setShow] = useState(false);
  const handlechiled =()=>{
    setShow(true)
  } 
  return (
    <>
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10vh',
      }}>
    <button type = "button"   onClick={handlechiled}>parent</button>
    </div>
    {show && ( <><Chield1 />  <Chield2 /></>)}
  </>
  )
}
export default Parent;