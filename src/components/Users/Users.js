import React from "react";
import Paginator from "../Common/Paginator/paginator";
import UserItem from "./User/UserItem";
import s from "./User.module.css";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return (
        <>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
            />

            <div className={s.users}>
                <div className={s.users__list}>
                    {users.map(u =>
                        <UserItem
                            key={u.id} user={u}
                            followingInProgress={props.followingInProgress}
                            unFollow={props.unFollow}
                            follow={props.follow}
                        />)}
                </div>
            </div>

        </>
    )
};

export default Users;