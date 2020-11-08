import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from '@reach/router';
import './App.css';
import Home from './components/Home';
import Three from './components/Three';

function App() {
  return (
    <div className="main">
      <div className="jumbotron bg-white text-center">
        <h1 className="text-uppercase">Can I Recycle It?</h1>
      </div>
      <nav class="navbar navbar-expand-sm bg-light justify-content-center sticky-top border-top border-bottom">
  <ul class="navbar-nav">
    <li class="nav-item">
    <a class="navbar-brand" href="#">Logo</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">THE 3 RULES</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">RECYCLING GUIDE</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">RECYCLING MYTHS</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">RECYCLING RESOURCES</a>
    </li>
  </ul>
</nav>
      <div className="jumbotron bg-white text-center">
        <h1 className="text-uppercase">Can I Recycle It?</h1>
      </div>
      <div>
        <h1>RECYCLING 101</h1>
        <h5>If you’re wondering what is recycling or how to recycle properly, check below to learn everything from recycling basics to expert tips.</h5>
      </div>
      <div class="pb-4 pb-lg-5">
        <div class="StickySubNav">
          <div class="StickySubNav-container ">
            <div class="container d-flex align-items-center">
              <div class="subNav-logo-links-container d-flex">
      <div class="subnav-links-container d-flex w-100">
      <ul class="d-flex subnav-links">
        <li class="subnav-link-item">
          <a tabindex="0" class="wm-link wm-cursor-pointer subnav-link inter-font-weight-bold " href="#rules">
            <span class="link-text">THE 3 RULES</span>
          </a>
        </li>
        <li class="subnav-link-item">
          <a tabindex="0" class="wm-link wm-cursor-pointer subnav-link inter-font-weight-bold " href="#guide">
            <span class="link-text">RECYCLING GUIDE</span>
          </a>
        </li>
        <li class="subnav-link-item">
          <a tabindex="0" class="wm-link wm-cursor-pointer subnav-link inter-font-weight-bold " href="#myths" >
            <span class="link-text">RECYCLING MYTHS</span>
          </a>
        </li>
        <li class="subnav-link-item">
          <a tabindex="0" class="wm-link wm-cursor-pointer subnav-link inter-font-weight-bold " href="#services" >
            <span class="link-text">RECYCLING SERVICES</span>
          </a>
        </li>
        <li class="subnav-link-item">
          <a class="Link a-taggable btn wm-link bg-transparent subnav-link inter-font-weight-bold  " tabindex="0" href="/us/en/recycle-right/recycling-resources">
            <span class="link-seperator"></span>
            <span class="link-text"> RECYCLING RESOURCES</span>
          </a>
        </li>
      </ul>
      </div>
      </div>
                </div>
                </div>
                </div>
                </div>
      <div className="navbar bg-white">
                <Link to="/">Home</Link>
                <Link to="/three-rules">3 Rules</Link>
      </div>

      <Router className="my-5">
        <Home path="/" />
        <Three path="/three-rules" />
        {/* <ViewPet path="/view/:_id" />
        <EditPet path="/edit/:_id" /> */}
      </Router>
    </div>
  );
}

export default App;
