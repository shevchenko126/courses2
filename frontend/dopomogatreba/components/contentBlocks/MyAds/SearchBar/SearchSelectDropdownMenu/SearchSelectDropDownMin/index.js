import 'bootstrap/dist/css/bootstrap.css';
import '../../../index.css'
import React, { useRef, useEffect } from "react";

function SearchSelectDropDownMin({ props }) {
    const wrapperRef = useRef(null);

    useCloseDrops(wrapperRef);

    /* Hook that alerts clicks outside of the passed ref */
    function useCloseDrops(ref) {
        useEffect(() => {
            /* Alert if clicked on outside of element */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    var dropdowns = document.getElementsByClassName('search-block')[0].getElementsByClassName("dropdown-content");
                    // var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show') && dropdowns[i].previousElementSibling.firstElementChild !== event.target) {
                            openDropdown.classList.remove('show');
                            openDropdown.previousElementSibling.firstElementChild.classList.remove("opened")
                        }
                    }
                }
                else if (ref.current && ref.current.contains(event.target)) {
                    if (event.target.tagName === "BUTTON") {
                        event.target.parentElement.nextElementSibling.classList.toggle("show")
                    }
                    else if (event.target.tagName === "FORM")
                        event.target.children[0].classList.toggle("show")
                    event.target.classList.toggle("opened")
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    return (
            <div>
                <div className="dropdown">
                    <button ref={wrapperRef} className="search__dropdown__select" title={props.name}>{props.name}</button>
                </div>
                <div className="dropdown-content">
                    {
                        props.links.map(({ name, href }, key) => {
                            return <a key={key} href={href}>{name}</a>
                        })
                    }
                </div>
            </div>
    )

}


export default SearchSelectDropDownMin