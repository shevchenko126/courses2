import Image from 'next/image'
import { peopleApi, onePersonApi } from '../../../api/people'
import Trans from '../../../inc/locale/Trans'

const HelloId = ({ id, title, product, person }) => {



    return (
        <>

            <h2>{ person.name }</h2>
            <div>{title}</div>
            <div>{id}</div>

            <h3><Trans key="Перейти" /></h3>

            <div className="product">
                <div>{ product ? product.title : '' }</div>
                <div>
                    <Image width="200" height="300" src={product ? product.image : ''} />
                </div>
            </div>
        </>
    )
}

export default HelloId



export async function getStaticPaths(){
    
    return {
        paths: [
            { params: { name:'starwars', id: '1' } },
            { params: { name:'starwars', id: '2' } },
            { params: { name:'starwars', id: '3' } },
        ],
        fallback: false
    }
    // return peopleApi().then((result) => {
    //     return {
    //         paths: [
    //             { params: { id: '1' } },
    //             { params: { id: '2' } },
    //             { params: { id: '3' } },
    //         ],
    //         fallback: false
    //     }
    // })
}

export async function getStaticProps(context){

    const { params } = context

    const product = {
        title:'rrrrrrrr',
        description:'sssss',
        image:"/nature.jpg"
    }
    return onePersonApi(params.id).then((result) => {
        return {
            props: {
                product,
                person:result,
                id: '222',
                title:'sssss'
            }
        }
    })

}