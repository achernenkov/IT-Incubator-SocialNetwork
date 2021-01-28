import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ContentContainer from "./components/Content/Content";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Common/Login/Login";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='content-wrapper'>
                    <Route path='/profile/:userID?' render={() => <ContentContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
