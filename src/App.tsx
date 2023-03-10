import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from "./sections/studentClient/components/headerAndFooterComponents/NavBar";
import Favorite from "./sections/studentClient/pages/Favorite";
import LandingPage from "./sections/studentClient/pages/LandingPage";
import {Footer} from './sections/studentClient/components/headerAndFooterComponents/Footer';
import theme from "./Theme";
import {ThemeProvider} from '@material-ui/core';
import SearchGrid from "./sections/studentClient/pages/SearchGrid";
import Profile from "./sections/studentClient/pages/Profile";
import VacancyGrid from "./sections/studentClient/pages/VacancyGrid";
import EditProfile from "./sections/studentClient/components/registerComponents/EditProfile";

import Support from "./sections/studentClient/pages/Support";

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/home" component={LandingPage}/>
                    <Route exact path="/search" component={SearchGrid}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/favorite" component={Favorite}/>
                    <Route exact path="/vacancy" component={VacancyGrid}/>
                    <Route exact path="/editProfile" component={EditProfile}/>
                    <Route exact path="/support" component={Support}/>

                </Switch>
                <Footer/>
            </Router>
        </ThemeProvider>
    );
}

export default App;
