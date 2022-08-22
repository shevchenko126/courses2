import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SingleAds.css'

const SingleAds = () => {

    return (
        
        <div>
            <section className="singleads">
                <div className="container-fluid d-flex se_item align-items-center justify-content-center">Vivo21 48MP OIS Slefie</div>
                <div className="container-fluid d-flex se_dir align-items-center justify-content-center">
                    <nav aria-label="breadcrumb">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item se_nav"><a href="#">Ads List</a></li>
                            <li className="breadcrumb-item se_nav"><a href="#">Home</a></li>
                            <li className="breadcrumb-item se_nav"><a href="#">Mobile</a></li>
                            <li className="breadcrumb-item se_nav"><a href="#">Vivo</a></li>
                            <li className="breadcrumb-item se_nav"><a href="#">Other Models</a></li>
                            <li className="breadcrumb-item se_nav"><a href="#">Other Models in New York</a></li>
                            <li className="breadcrumb-item se_nav_act active text-white" aria-current="page">Vivo21 48MP OIS Slefie</li>
                        </ul>
                    </nav>
                </div>
            </section>
        </div>             
    )
}

export default SingleAds
