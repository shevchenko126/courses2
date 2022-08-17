import { useState } from 'react';
import store from '../../store';
import { connect } from 'react-redux';
import { useEffect } from 'react';



const mapState = ({ products, user}) => {
  const { count } = products;
  const { userData } = user;
  return { count, userData }
}

const mapDispatch = {
  increment: () => ({type: 'PRODUCTS_INCREMENT'}),
  decrement: () => ({type: 'PRODUCTS_DECREMENT'}),
  setName: (name) => ({type: 'SET_NAME', name})
}

const connector = connect(mapState, mapDispatch);


const mapNumberState = ({ products, user}) => {
  const { count } = products;
  const { userData } = user;
  return { count, userData }
}

const mapNumberDispatch = {
  increment: () => ({type: 'PRODUCTS_INCREMENT'}),
  decrement: () => ({type: 'PRODUCTS_DECREMENT'}),
  setName: (name) => ({type: 'SET_NAME', name})
}

const connectorNumber = connect(mapNumberState, mapNumberDispatch);


const Number = ({ count }) => {

    // const { count } = store.getState();
    // const [number, setNumber] = useState(count);
    
    // store.subscribe(() => {
    //   console.log(store.getState())
    //     if(store.getState().count !== number){
    //         setNumber(store.getState().count);
    //     }
    // })
  
  return (
    <>
    {count}
  </>)
}



const Count = ({userData, increment}) => {

  const NumberRedux = connector(Number);
  // const { userData } = store.getState();
  // const [name, setName] = useState(userData.name);
  // store.subscribe(() => {
  //   console.log(store.getState())
  //     if(store.getState().userData.name !== name){
  //         setName(store.getState().userData.name);
  //     }
  // })



  useEffect(() => {
    // increment();
    console.log('userDate changed to', userData.name)
  }, [userData])

  return (
    <>
    {userData.name} имеет <NumberRedux /> яблок
  </>)
}


const CounterRedux = ({
  increment,
  decrement,
  setName
}) => {

  const CountRedux = connector(Count);

  const handleClick = (mark) => {
    if(mark == 'minus'){
        decrement();
    } else {
        increment();
    }
    
  }
  return (
    <div>
        <p><CountRedux /></p>
        <button onClick={() => {handleClick('minus')}}>-</button>
        <button onClick={() => {handleClick('plus')}}>+</button>
        <button onClick={() =>{
            setName('Bob');
        }}>Change name</button>
    </div>
  );
}


export default connector(CounterRedux);