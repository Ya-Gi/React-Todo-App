import {Component} from 'react';

import {useState, useEffect} from 'react';


function App(props) {
  const [count,setCount] = useState(props.count);
  const [text, setText] = useState(props.text);
  useEffect(()=>{
    console.log('count')
  },[count])
  useEffect(()=>{
    console.log('mount')
        
  },[])
  useEffect(() => {
    console.log('mount','update')

  })
  return (
    <div className="App">
           <p>buttona {count} kez tıkladınız</p>
           <p>{text}</p>
           <button onClick={()=> setCount(count +1)} className="btn btn-primary">+1</button>
           <button onClick={()=> setCount(count -1)} className="btn btn-primary">-1</button>
           <button onClick={()=> setCount(props.count)} className="btn btn-primary">reset</button>
           <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
    </div>
  );
}
App.defaultProps = {
  count:5,
  text:''
}


export default App;