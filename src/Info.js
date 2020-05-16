import React, { Component } from "react";
import MainNav from "./Components/MainNav";
import CvNav from "./Components/CvNav";
import Content from "./Components/Content";
import SideNav1 from "./Components/SideNav1";
import SideNav2 from "./Components/SideNav2";
import SideNav3 from "./Components/SideNav3";
import Work from "./Components/Content/1Work";
import Programming from "./Components/Content/1Programming";
import ProjectsProgress from "./Components/Content/2ProjectsProgress";
import Toraberu from "./Components/Content/2Toraberu";
import ProfilePage from "./Components/Content/2PorfilePage";
import Other2 from "./Components/Content/2OtherProjects";
import Activities from "./Components/Content/1Activities";
import Education from "./Components/Content/1Education";
import Hobbies from "./Components/Content/3Hobbies";

import { BrowserRouter, Route} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Info extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <div className="right">
          <MainNav />
          <CvNav />
          <Content />
          <div className="sidenav">
            <Route path="/about" component={SideNav1} />
            <Route path="/my-projects" component={SideNav2} />
            <Route path="/hobbies" component={SideNav3} />
          </div>

          <div className="content">
          <Route exact path="/about/work-experience" component={Work} />
          <Route exact path="/about/education" component={Education} />
          <Route exact path="/about/activities" component={Activities} />
          <Route exact path="/about/why-programming" component={Programming} />
          <Route exact path="/about/hobbies" component={Hobbies} />
          <Route exact path="/my-projects/toraberu" component={Toraberu} />
          <Route exact path="/my-projects/profile-page" component={ProfilePage}/>
          <Route exact path="/my-projects/other" component={Other2} />
          <Route exact path="/my-projects/in-progress" component={ProjectsProgress} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Info;
