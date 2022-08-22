import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'
// import axios from 'axios'
import AdsNavBar from './AdsNavBar';
import AdsCard from './AdsCard';
import AdsPagination from '../AdsPagination';
import React, { useState, useEffect } from "react";


function AdsList(props) {
    let { profileData, search } = props.cards
    let cards = search(profileData)

    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage] = useState(3)
    const [siblingCount] = useState(1)
    const [arrOfPage, setArrOfPage] = useState([])

    useEffect(() => {
        const getCards = async () => {
            setLoading(true)
            /* use when .json
             const res = await..
             console.log(res)
             setCards(res.data)
             */
            setLoading(false)
        }
        getCards()
    }, [])


    const totalPageCount = Math.ceil(cards.length / cardsPerPage)

    const pages = []
    for (let i = 1; i <= totalPageCount; i++) {
        pages.push(i)
    }

    const lastCardIndex = currentPage * cardsPerPage
    const firstCardIndex = lastCardIndex - cardsPerPage
    // use cards, but now we use card
    const currentCard = cards.slice(firstCardIndex, lastCardIndex)


    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => {
        if (currentPage !== totalPageCount) {
            setCurrentPage(prev => prev + 1)
        }
    }
    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(prev => prev - 1)
        }
    }
    const leftDot = () => {
        setCurrentPage(prev => prev - (1 + 2 * siblingCount))
    }
    const rightDot = () => {
        setCurrentPage(prev => prev + (1 + 2 * siblingCount))
    }


    const range = (start, end) => {
        let length = end - start + 1;
        /*
            Create an array of certain length and set the elements within it from
          start value to end value.
        */
        return Array.from({ length }, (_, idx) => idx + start);
    };

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

    useEffect(() => {
        
        let tempNumberOfPages = [...pages]

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;


        if (!shouldShowLeftDots && shouldShowRightDots) {

            let leftItemCount = 1 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);
            let rightItemCount = 1 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount,
                totalPageCount
            );
            tempNumberOfPages = [...leftRange, 'R...', totalPageCount];

        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 1 + 2 * siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount,
                totalPageCount
            );
            tempNumberOfPages = [firstPageIndex, 'L...', ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            tempNumberOfPages = [firstPageIndex, 'L...', ...middleRange, 'R...', lastPageIndex];
        }

        if (totalPageCount === 6) {

            if (!shouldShowLeftDots && shouldShowRightDots) {

                let leftItemCount = 1 + 2 * siblingCount;
                let leftRange = range(1, leftItemCount)
                tempNumberOfPages = [...leftRange, 'R...', totalPageCount]

            } else if (shouldShowLeftDots && !shouldShowRightDots) {
                let rightItemCount = 1 + 2 * siblingCount;
                let rightRange = range(
                    totalPageCount - rightItemCount + 1,
                    totalPageCount
                );
                tempNumberOfPages = [firstPageIndex, 'L...', ...rightRange];
            } else {

                let leftItemCount = 1 + 2 * siblingCount;
                let leftRange = range(1, leftItemCount)
                tempNumberOfPages = [...leftRange, 'R...', totalPageCount]
            }

        }

        if (totalPageCount <= 5) {
            tempNumberOfPages = [...pages]
        }

        setArrOfPage(tempNumberOfPages)
    }, [currentPage])


    return (
        <>
            <AdsNavBar />
            <AdsCard props={currentCard} loading={loading} />
            <AdsPagination cardsPerPage={cardsPerPage} totalCards={cards.length}
                paginate={paginate} prevPage={prevPage}
                nextPage={nextPage} currentPage={currentPage}
                pageNumbers={arrOfPage}
                leftDot={leftDot} rightDot={rightDot} />
        </>
    )
}

export default AdsList