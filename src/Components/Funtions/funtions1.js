import {useState} from 'react';

function Funnction1() {
    const [count, setCount] = useState(0);
    const [colll, banana] = useState(10);


  return (
    <div className="funtion1">
       <p>You clicked {count} times</p>
       <button onClick={() => setCount(count+1)}>Click Here</button> <br/>
       <p>You clicked {colll} times</p>
       <button onClick={() => banana(colll+10)}>Click Here</button> 

       
    </div>
  );
}

export default Funnction1;