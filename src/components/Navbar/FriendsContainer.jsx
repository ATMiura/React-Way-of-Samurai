import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {FriendsListCreator} from "../../redux/sidebar-reducer";

const mapStateToProps = (state) => {
    return{
        sidebar: state.sidebar,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FriendsList: () => {
            dispatch(FriendsListCreator());
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);


export default FriendsContainer;