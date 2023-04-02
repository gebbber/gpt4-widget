import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import { AddDarkModeContext } from './hooks/useDarkMode';
import { RequestsContextProvider } from './RequestsDataContext/useRequests';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AddDarkModeContext>
            <RequestsContextProvider>
                <App />
            </RequestsContextProvider>
        </AddDarkModeContext>
    </React.StrictMode>
);
