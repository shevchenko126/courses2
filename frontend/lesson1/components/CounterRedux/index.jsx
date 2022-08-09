import { useState } from 'react';
import store from '../../store';




const Number = () => {

    const { count } = store.getState();
    const [number, setNumber] = useState(count);
    
    store.subscribe(() => {
      console.log(store.getState())
        if(store.getState().count !== number){
            setNumber(store.getState().count);
        }
    })
  
  return (
    <>
    {number}
  </>)
}



const Count = () => {


  const { userData } = store.getState();
  const [name, setName] = useState(userData.name);
  store.subscribe(() => {
      if(store.getState().userData.name !== name){
          setName(store.getState().userData.name);
      }
  })

  return (
    <>
    {name} имеет <Number /> яблок
  </>)
}


const CounterRedux = () => {

  const handleClick = (mark) => {
    if(mark == 'minus'){
        store.dispatch({type: 'DECREMENT'});
    } else {
        store.dispatch({type: 'INCREMENT'});
    }
    
  }
  return (
    <div>
        <p><Count /></p>
        <button onClick={() => {handleClick('minus')}}>-</button>
        <button onClick={() => {handleClick('plus')}}>+</button>
    </div>
  );
}

export default CounterRedux;