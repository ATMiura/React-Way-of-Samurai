import React from 'react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
/*import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";*/
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                               render={()=> <Redirect to={'/profile'} />}
                        />
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}
                        />
                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}
                        />
                        <Route path='/users' render={() => <UsersContainer/>}/>

                        <Route path='/login' render={() => <Login/>}/>

                        <Route path='*' render={() =>

                            <div>404 - Not Found</div>
                        }/>
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SamiuraJSApp = (props) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
};

export default SamiuraJSApp;