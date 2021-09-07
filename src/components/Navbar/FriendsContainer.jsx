import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {setFriends, toggleIsFetching, setTotalUsersCount} from "../../redux/sidebar-reducer";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class FriendsContainer extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(null, this.props.totalCount).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    render() {
        return(
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Friends {...this.props} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        sidebar: state.sidebar,
        friends: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
    }
};

export default connect(mapStateToProps, {setFriends, toggleIsFetching, setTotalUsersCount})(FriendsContainer);