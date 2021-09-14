import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unFollow,
    toggleFollowingProgress,
    requestUsers, getFriends,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
    getIsFetching,
    getFollowingInProgress,
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users key={this.props.userId}
                    onPageChanged={this.onPageChanged}
                    {...this.props}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{ follow, unFollow, setCurrentPage, toggleFollowingProgress, requestUsers, getFriends}))
(UsersContainer);