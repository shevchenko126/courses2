import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css'

function SearchInput(props) {
    let { q, setQ } = props.props
    console.log(props.props)
    return <input
        className="search__input-field mx-1"
        placeholder={props.placeholder}
        value={q}
        onChange={(e) => setQ(e.target.value)}
    />
}

/*"Ads tittle, keyword"*/

export default SearchInput