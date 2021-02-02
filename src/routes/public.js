import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom';

import HomeIndex from '../ui/home/index';
import LayoutNav from '../ui/layout/nav';
import LayoutSide from '../ui/layout/side';
import Berita from '../ui/berita/index';
import Galeri from '../ui/galeri/index';
import Login from '../ui/autentikasi/login';

class Public extends React.Component{
    state={

    }
    render() {
        return(
            <Router>
                <LayoutNav />
                <LayoutSide />

                <Switch>
                    <Route path="/" exact component={HomeIndex} />
                    <Route path="/berita" component={Berita} />
                    <Route path="/galeri" component={Galeri} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        )   
    }
}

export default Public;