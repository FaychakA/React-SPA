import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import Artist from "./components/Artist/Artist";
import Footer from "./components/Footer/Footer";
import './App.scss';

function App() {

    return (
        <div className="app">
            <div className="app__header">
                <Header/>
            </div>

            <div className="app__content">
                <Switch>
                    <Route
                        path="/"
                        exact
                        component={Home}
                    />

                    <Route
                        path="/search"
                        component={Search}
                    />

                    <Route
                        path="/artist/:artistName"
                        exact
                        component={Artist}
                    />
                </Switch>
            </div>

            <div className="app__footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
