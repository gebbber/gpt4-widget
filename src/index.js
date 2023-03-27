import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { AddWidgetDataContext } from './Widget/useWidgetData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AddWidgetDataContext>
            <App />
        </AddWidgetDataContext>
    </React.StrictMode>
);
