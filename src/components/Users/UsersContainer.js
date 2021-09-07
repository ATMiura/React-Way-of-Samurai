import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unFollow,
    toggleFollowingProgress, getUsers,
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

export default connect(
    mapStateToProps,
    {follow, unFollow, setCurrentPage, toggleFollowingProgress, getUsers})
(UsersContainer);