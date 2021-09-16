import React, {useState} from "react";
import s from "./paginator.module.css";

let Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize=10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for(let i=1; i <=pagesCount; i++){
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <>
            <div className={s.pagination}>
                <ul className={s.pagination__list}>
                    {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber-1) }}>Prev</button>}
                    {pages
                        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => {
                        return (
                            <li
                                key={p}
                                className={`${s.pagination__item} ${currentPage === p && s.active}`}
                                onClick={(e) => {onPageChanged(p)}}> {p}
                            </li>
                        )
                    })}
                    {portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
                </ul>
            </div>
        </>
    )
};

export default Paginator;