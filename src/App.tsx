import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {actionType, stateType} from './redux/state'

type AppType = {
    state: stateType
    dispatch: (action: actionType) => void

}

const App: React.FC<AppType> = (propsApp) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content-wrapper'>
                    <Route path='/profile' render={() => <Content
                        contentState={propsApp.state.postState.postArray}
                        textValue={propsApp.state.postState.postText}
                        dispatch={propsApp.dispatch}
                    />
                    }
                    />
                    <Route path='/dialogs' render={() => <Dialogs
                        dialogsState={propsApp.state.dialogsState}
                        textValueMessage={propsApp.state.dialogsState.messageText}
                        dispatch={propsApp.dispatch}
                    />
                    }
                    />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
