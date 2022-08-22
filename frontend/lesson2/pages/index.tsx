import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Profile from '../components/Profile'
import type { ProfileType } from '../components/Profile'



const Home:NextPage = () => {

    let a:number = 5;
    let b:string = '6';
    let c:boolean = true;


    let d = a + b;

    const profile:ProfileType = {
        name:'ssss',
        age:2323,
        role:null,
        address:[
            {
              city:"Kyiv",
              street:"Shevchenko",
              house:1
            },
        ],
        lessons:["lesson1", "lesson2", "lesson3"]
    }



  return (
    <div className={styles.container}>dddd{d}
      <Profile profile={profile} />
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async  ({req}) => {

    console.log(req.cookies.tt)
    return {
      props: {
          title:"Hello World!11111"
      }
  }
}

//token=123;authToken=456;
// getCookie('token') = 123
