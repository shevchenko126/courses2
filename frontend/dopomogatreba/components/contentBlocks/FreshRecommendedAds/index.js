import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

let freshAds = [
    {
        id: 0,
        name: 'Toyota Corolla Fielder WXB G grade Hybrid',
        category: 'Education',
        location: 'Ukraine',
        image: './logo512.png',
        price: '100',
        highlight: true,
        flag: 'new'
    },
    {
        id: 1,
        name: 'Canon EOS Rebel SL3 / EOS 250D',
        category: 'Vehicles',
        location: 'New-York',
        image: '',
        price: '0.5',
        highlight: true,
        flag: ''
    },
    {
        id: 2,
        name: 'Toyota Corolla Fielder WXB G grade Hybrid',
        category: 'Education',
        location: 'Ukraine',
        image: 'https://img.freepik.com/free-vector/leaves-background-with-metallic-foil_79603-956.jpg?w=2000',
        price: '100',
        highlight: true,
        flag: ''
    },
    {
        id: 3,
        name: 'Toyota Corolla Fielder WXB G grade Hybrid',
        category: 'Education',
        location: 'Ukraine',
        image: '',
        price: '100',
        highlight: false,
        flag: ''
    },
    {
        id: 4,
        name: 'Toyota Corolla Fielder WXB G grade Hybrid',
        category: 'Education',
        location: 'Ukraine',
        image: '',
        price: '100',
        highlight: false,
        flag: ''
    },
    {
        id: 5,
        name: 'Toyota Corolla Fielder WXB G grade Hybrid',
        category: 'Education',
        location: 'Ukraine',
        image: '',
        price: '100',
        highlight: false,
        flag: 'new'
    },
    {
        id: 6,
        name: 'Toyota Corolla Fielder WXB G grade Hybrid',
        category: 'Education',
        location: 'Ukraine',
        image: 'https://assets.digitalocean.com/articles/alligator/css/object-fit/example-object-fit.jpg',
        price: '100',
        highlight: false,
        flag: 'new'
    },
    {
        id: 7,
        name: 'Toyota Corolla Fielder WXB G grade Hybrid',
        category: 'Education',
        location: 'Ukraine',
        image: '',
        price: '100',
        highlight: false,
        flag: 'urgent'
    },
    {
        id: 8,
        name: 'Toyota Corolla Fielder WXB G grade Hybrid',
        category: 'Education',
        location: 'Ukraine',
        image: '',
        price: '100',
        highlight: false,
        flag: ''
    },
    {
        id: 9,
        name: 'Toyota Corolla Fielder WXB G grade Hybrid',
        category: 'Education',
        location: 'Ukraine',
        image: '',
        price: '100',
        highlight: false,
        flag: null
    },
    {
        id: 10,
        name: 'Toyota Corolla Fielder WXB G grade Hybrid',
        category: 'Education',
        location: 'Ukraine',
        image: '',
        price: '100',
        highlight: false,
        flag: undefined
    },
    {
        id: 11,
        name: 'Toyota Corolla Fielder WXB G grade Hybrid',
        category: 'Education',
        location: 'Ukraine',
        image: '',
        price: '100',
        highlight: false,
        flag: 'new'
    },
    {
        id: 12,
        name: 'Toyota Corolla Fielder WXB G grade Hybrid',
        category: 'Education',
        location: 'Ukraine',
        image: '',
        price: '100',
        highlight: false,
        flag: 'new'
    }
]

function FreshRecommendedAds() {
    return (
        <>
            <h2 className="heading01">Fresh recommended ads</h2>
            <div className="container ads d-flex flex-wrap justify-content-start">

                {freshAds.map((card) => (
                    <div key={card.id} className="col-12 col-xxl-3 col-lg-4 col-md-6 col-sm-12 my-2">
                        <div className={card.highlight ? "ads__card highlight" : "ads__card"}>
                            <a href="/">
                                <div className="ads__card__image">
                                    <div className="ads__card__badge">{card.flag}</div>
                                    <img className="ads__card__bg" src={card.image ? card.image : "./d-image.png"} alt="cardImage" />
                                </div>
                                <div className="ads__card__heading">
                                    <div className="ads__card__heading__heading">
                                        <div className="ads__card__category">{card.category}</div>
                                        <div className="ads__card__name">{card.name}</div>
                                    </div>
                                    <div className="ads__card__fun-facts">
                                        <div className="fun-facts__location">{card.location}</div>
                                        <div className="fun-facts__price">{card.price}</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container ads d-flex justify-content-center">
                <button className="ads__button__view">
                    View Alls
                </button>
            </div>

        </>
    )
}

