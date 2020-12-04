import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppType = {
    store:any
}

const App: React.FC<AppType> = (propsApp) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content-wrapper'>
                    <Route path='/profile' render={() => <Content store={propsApp.store}
                    />
                    }
                    />
                    <Route path='/dialogs' render={() => <DialogsContainer store={propsApp.store}/>
                    }
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
