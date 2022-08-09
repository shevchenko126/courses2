import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Counter from '../components/Counter'
import CounterRedux from '../components/CounterRedux'
import { Provider } from 'react-redux'
import store from '../store'

export default function Home() {
  return (


    <Provider store={store}>
      <div className="container">

        <Counter />
        <CounterRedux />

        <header>dfsdfsdfsdfs</header>
        <h1 className="title">
          ssssss
        </h1>
        <div className="content">
          geregergregre
        </div>
        <div className="content__bottom">
          geregergregre
        </div>
        
      </div>
  
    </Provider>
  )
}
