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
      <nav class="navbar navbar-expand-sm bg-light justify-content-center sticky-top border-top border-bottom ">
        <ul class="navbar-nav">
          {/* <li class="nav-item">
            <Link to="/">Home</Link>
          </li>  */}
          <li class="nav-item">
            <a class="nav-link wm-link wm-cursor-pointer subnav-link inter-font-weight-bold" href="#"><Link to="/three-rules">THE THREE RULES</Link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link wm-link wm-cursor-pointer subnav-link inter-font-weight-bold" href="#">RECYCLING GUIDE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link wm-link wm-cursor-pointer subnav-link inter-font-weight-bold" href="#">RECYCLING MYTHS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link wm-link wm-cursor-pointer subnav-link inter-font-weight-bold" href="#">RECYCLING RESOURCES</a>
          </li>
        </ul> 
      </nav>
      <div className="jumbotron bg-white mt-5 pb-5">
        <h1>RECYCLING 101</h1>
        <h5>If you’re wondering what is recycling or how to recycle properly, check below to learn everything from recycling basics to expert tips.</h5>
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
