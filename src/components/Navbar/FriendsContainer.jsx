import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {setFriends, toggleIsFetching, setTotalUsersCount} from "../../redux/sidebar-reducer";
import Preloader from "../Common/Preloader/Preloader";
import {getFriends} from "../../redux/usersReducer";

class FriendsContainer extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true);
        this.props.getFriends();
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
        friends: state.usersPage.friends,
        totalUsersCount: state.usersPage.totalUsersCount,
    }
};

export default connect(mapStateToProps, {setFriends, toggleIsFetching, setTotalUsersCount, getFriends})(FriendsContainer);