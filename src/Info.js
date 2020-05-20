import React, { Component } from "react";
import MainNav from "./Components/MainNav";
import CvNav from "./Components/CvNav";
import SideNav1 from "./Components/SideNav1";
import SideNav2 from "./Components/SideNav2";
import Work from "./Components/Content/1Work";
import Programming from "./Components/Content/1Programming";
import ProjectsProgress from "./Components/Content/2Sibus";
import Toraberu from "./Components/Content/2Toraberu";
import ProfilePage from "./Components/Content/2PorfilePage";
import Activities from "./Components/Content/1Activities";
import Education from "./Components/Content/1Education";
import Hobbies from "./Components/Content/3Hobbies";

import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Info extends Component {
  render() {
    return ( 
      <BrowserRouter>
      
        <div className="right">
        
          <MainNav />
          <div className="show-for-large">
            <CvNav />
          </div>
          <div className="sidenav">
            <Route path="/about" component={SideNav1} />
            <Route path="/my-projects" component={SideNav2} />
          </div>

        <Route render={({ location }) => (
          <div className="content">
          <Route exact path="/" render={() => (
              <Redirect to="/about/work-experience"/>
            )}/>
            <TransitionGroup>
              <CSSTransition
                      key={location.key}
                      classNames="fade"
                      timeout={300}
                    >
                <Switch location={location}>
                    <Route exact path="/about/work-experience" component={Work} />
                    <Route exact path="/about/education" component={Education} />
                    <Route exact path="/about/activities" component={Activities} />
                    <Route exact path="/about/why-programming" component={Programming} />
                    <Route exact path="/about/other" component={Hobbies} />
                    <Route exact path="/my-projects/toraberu" component={Toraberu} />
                    <Route exact path="/my-projects/profile-page" component={ProfilePage}/>
                    <Route exact path="/my-projects/sibus" component={ProjectsProgress} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Info;
