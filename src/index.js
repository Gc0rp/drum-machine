import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import {createGlobalStyle} from 'styled-components';
import store from './store';
import DrumMachine from './components/drumMachine';
import Globalstylesheet from './constants/css/globalStyleSheet';
import Settings from './components/settings';

const GlobalStyle = createGlobalStyle`${Globalstylesheet}`;

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <GlobalStyle />  
            <Provider store={store}>
                <div className="row">
                    <DrumMachine />
                    <Settings />
                </div>
            </Provider>
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
);
