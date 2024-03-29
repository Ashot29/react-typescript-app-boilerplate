import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Layout from "./containers/layout/layout";
import './App.css';

const App = () => {
    return (
        <Router>
            <Layout/>
        </Router>
    );
}

export default App;
