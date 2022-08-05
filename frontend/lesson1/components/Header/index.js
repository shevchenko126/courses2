import { useRouter } from 'next/router'
import Link from 'next/link'
import { env } from '../../next.config'
import {peopleApi} from '../../api/people'
import { useEffect } from 'react'


const Header = () => {

    const router = useRouter()


    console.log(router.locale)

    console.log( process.env.SERVER_URL )


    useEffect(() => {
        peopleApi().then((result) => {
            console.log(result)
        })
    }, '')
    // console.log(router)
    return (
        <>
            <div>Header</div>
            { router.locale }
            <Link href={router.asPath} locale={'en'}>English</Link>
            <Link href={router.asPath} locale={'ru'}>Русский</Link>
        </>
    )
}

export default Header
