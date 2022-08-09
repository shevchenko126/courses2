import { useState, useContext, createContext } from 'react'

const initNumber = 0;

const NumberContext = createContext(initNumber)

const Number = () => {

  const count = useContext(NumberContext)

  
  return (
    <>
      {count}
    </>
  )
}



const Count = () => {



  return (
    <>
    Ваше число: <Number />
  </>)
}


const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <NumberContext.Provider value={count}>
        <p><Count /></p>
        <button onClick={handleClick}>Click me</button>
      </NumberContext.Provider>
    </div>
  );
}

export default Counter;