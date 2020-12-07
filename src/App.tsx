import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content-wrapper'>
                    <Route path='/profile' render={() => <Content/> } />
                    <Route path='/dialogs' render={() => <DialogsContainer/> } />
                    <Route path='/users' render={() => <UsersContainer/> } />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
