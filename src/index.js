import React from 'react';
// import ReactDOM from 'react-dom'; The new way to import createRoot:
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';


const root = createRoot(document.getElementById('root'));
root.render(<App />);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
