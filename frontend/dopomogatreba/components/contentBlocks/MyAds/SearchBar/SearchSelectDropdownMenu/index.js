import 'bootstrap/dist/css/bootstrap.css';
import '../../index.css'
import React, { useEffect, useState } from "react";
import SearchSelectDropDownMax from './SearchSelectDropDownMax';
import SearchSelectDropDownMin from './SearchSelectDropDownMin';

function SearchSelectDropDownMenu({ props }) {
    function useScreenSize() {
        const [windowSize, setWindowSize] = useState(getWindowSize());

        useEffect(() => {
            function handleWindowResize() {
                setWindowSize(getWindowSize());
            }
            window.addEventListener('resize', handleWindowResize);
            return () => {
                window.removeEventListener('resize', handleWindowResize);
            };
        }, []);
        return (windowSize)
    }

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    if (useScreenSize().innerWidth < 640) {
        return (
            <div
                className="search__dropdown d-flex flex-row flex-nowrap justify-content-between justify-content-md-end align-items-start">
                {
                    props.map((category, key) => {
                        return <SearchSelectDropDownMin props={category} key={key} />
                    })
                }
            </div>

        )
    } else {
        return (
            <div
                className="search__dropdown d-flex flex-row flex-nowrap justify-content-between justify-content-md-end align-items-start">
                {
                    props.map((category, key) => {
                        return <SearchSelectDropDownMax props={category} key={key} />
                    })
                }
            </div>
        )
    }


}


export default SearchSelectDropDownMenu