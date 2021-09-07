import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {setFriends, toggleIsFetching} from "../../redux/sidebar-reducer";
import Preloader from "../Common/Preloader/Preloader";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

class FriendsContainer extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers().then(data => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(data.items);
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
    }
};

export default connect(mapStateToProps, {setFriends, toggleIsFetching})(FriendsContainer);