import React from "react";
import s from "./paginator.module.css";

let Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for(let i=1; i <pagesCount; i++){
        pages.push(i);
    }

    return (
        <>
            <div className={s.pagination}>
                <ul className={s.pagination__list}>
                    {pages.map(p => {
                        return (
                            <li
                                className={`${s.pagination__item} ${currentPage === p && s.active}`}
                                onClick={(e) => {onPageChanged(p)}}> {p}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
};

export default Paginator;