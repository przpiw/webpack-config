import {useState} from 'react'

const Bar = () => {
  const [selected,setSelected] = useState('')


  return (
    <div>
    
    <button onClick={()=>setSelected('A')}>A</button>
    <button onClick={()=>setSelected('B')}>B</button>
    <h1>{selected === 'A' && "A"}</h1>
    <h1>{selected === 'B' && "B"}</h1>
    </div>
  )
}

export default Bar