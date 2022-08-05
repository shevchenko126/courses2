import Header from "../../../components/Header"
import Trans from '../../../inc/locale/Trans'

const HelloName = ({ title }) => {

    
    return (
        <>
            <Header />
            <Trans string="Перейти" />
            <div>{title}</div>
        </>
    )
}

export default HelloName

export async function getServerSideProps({ query, req }){

    return {
        props: {
            name: query.name,
            title:query.name,
        }
    }
}
