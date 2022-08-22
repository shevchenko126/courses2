import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css'
import AdsCardDropdown from './AdsCardDropdown';

function AdsCard( { props, loading } ) {

    
    function formattedDate(timestamp) {
        let dt = new Date(timestamp)
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
          return `${months[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`
    }

    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
      }

    if(loading){
        return <h2>Loading...</h2>
    }

    return (
        <div className="ads-dashboard d-flex flex-column justify-content-start align-items-start">
                {props.map((card) => (
                        <div key={card.id} className="ads__card d-flex flex-row align-items-center">
                            <div className="ads__card__info">
                                <div className="ads__card__image">
                                    <img src={card.image} alt="cardImage" />
                                </div>
                                <div className="ads__card__name">{card.name}</div>
                            </div>
                            <div className="ads__card__date">{formattedDate(card.date)}</div>
                            <div className="ads__card__price">{'\u20B4'}{card.price}</div>
                            <div className={`ads__card__activity ${card.status}`}>{capitalizeFirstLetter(card.status)}</div>
                            <div className="ads__card__buttons">
                                <button className="ads__card__edit" title="Edit">Edit</button>
                                <AdsCardDropdown props={card.dropdownItems} />
                            </div>
                        </div>
                ))}
            </div>
            )
}

export default AdsCard