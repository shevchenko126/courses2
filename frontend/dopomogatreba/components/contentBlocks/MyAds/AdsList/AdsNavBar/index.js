import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css'

function AdsNavBar() {
    return (
        <>
            <div className="ads-navigation d-flex flex-row justify-content-start align-items-center">
                <div className="ads__navigation w-36">Ads</div>
                <div className="ads__navigation w-14">Date</div>
                <div className="ads__navigation w-14">Prices</div>
                <div className="ads__navigation w-14">Status</div>
                <div className="ads__navigation w-18">Action</div>
            </div>
        </>
    )
}

export default AdsNavBar