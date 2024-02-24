import React,{useEffect, useState} from 'react'

const Effect = () => {
debugger;
    const [count,setCount] = useState(0);
    useEffect(() => {
     const timer= setTimeout(() => {
        setCount(previous => previous + 1);
      }, 1000);
      return () => clearTimeout(timer);

    },[]);
   
  return (
    <div>
        <p> {count} </p>
    </div>
  )
}

export default Effect