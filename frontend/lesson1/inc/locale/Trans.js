import strings from './strings'
import { useRouter } from 'next/router'

const Trans = ({string}) => {
    console.log( string )
    
    const router = useRouter()
    console.log( strings )
    console.log( string )
    return (<>{ strings[string][router.locale] }</>)
}

export default Trans