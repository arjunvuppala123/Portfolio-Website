import React from 'react';
import "./MainNavigation.css";

class MainNavigation extends React.Component {
  render() {
    return (
        <div class="container-fluid padding" id="header">
        <nav id="header" class="navbar navbar-expand-lg fixed-top">
          <div class="container-fluid">  
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a
                    href="#about"
                    class="nav-link text-uppercase font-weight-bold"
                    >Who am I?</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="#events"
                    class="nav-link text-uppercase font-weight-bold"
                    >My Tech-stack</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    href="#events"
                    class="nav-link text-uppercase font-weight-bold"
                    >My Projects</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#team" class="nav-link text-uppercase font-weight-bold"
                    >Contact Me!</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default MainNavigation;