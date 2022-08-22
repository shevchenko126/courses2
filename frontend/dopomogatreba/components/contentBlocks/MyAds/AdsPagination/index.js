import 'bootstrap/dist/css/bootstrap.css';
import '../index.css'


function AdsPagination({ cardsPerPage, totalCards, paginate, prevPage, nextPage, currentPage, pageNumbers, leftDot, rightDot }) {

    const totalPages = Math.ceil(totalCards / cardsPerPage)

    return (
        <div className="ads-pagination d-flex flex-row justify-content-center mt-4">
            {currentPage !== pageNumbers[0] &&
                <div className="page-btn">
                    <div className="page-btn-link arrow-left d-flex align-items-center justify-content-center" onClick={prevPage}>
                    </div>
                </div>
            }

            <div className="d-flex">
                {
                    pageNumbers.map((number, key) => (
                        <li className={currentPage === number ? "page-elem current" : "page-elem"} key={number}>
                            {number === 'L...' &&
                                <div className="page-link d-flex align-items-center justify-content-center" onClick={leftDot}>
                                    ...
                                </div>
                            }
                            {number >= 0 &&
                                <div className="page-link d-flex align-items-center justify-content-center" onClick={() => paginate(number)}>
                                    {(number > 9) ? `${number}` : `0${number}`}
                                </div>
                            }
                            {number === 'R...' &&
                                <div className="page-link d-flex align-items-center justify-content-center" onClick={rightDot}>
                                    ...
                                </div>
                            }

                        </li>
                    ))
                }
            </div>

            {currentPage !== totalPages &&
                <div className="page-btn">
                    <div className="page-btn-link arrow-right d-flex align-items-center justify-content-center" onClick={nextPage}>
                    </div>
                </div>
            }


        </div >


    )

}

export default AdsPagination