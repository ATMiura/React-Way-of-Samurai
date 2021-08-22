import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           dialogsPage={props.state.dialogsPage}
                           addDialogsMessage={props.addDialogsMessage}
                           updateNewDialogsMessage={props.updateNewDialogsMessage}
                       />}/>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}
                       />}/>
            </div>
        </div>
    )
};

export default App;