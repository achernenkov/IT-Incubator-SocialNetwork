import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {storeType} from './redux/state'

type AppType = {
    store: storeType
}

const App: React.FC<AppType> = (propsApp) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content-wrapper'>
                    <Route path='/profile' render={() => <Content
                        state={propsApp.store.getState().postState}
                        textValue={propsApp.store.getState().postText}
                        dispatch={propsApp.store.dispatch.bind(propsApp.store)}
                    />
                    }
                    />
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsState={propsApp.store.getState().dialogsState}
                        textValueMessage={propsApp.store.getState().dialogsState.messageText}
                        redux_message={propsApp.store.redux_message.bind(propsApp.store)}
                    />
                    }
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
