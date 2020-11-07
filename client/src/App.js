import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from '@reach/router';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <div className="jumbotron bg-info text-light text-center">
        <h1>Can I Recycle It?</h1>
      </div>
      <Link className="btn btn-outline-info float-right" to="/">Home</Link>
      <Router className="my-5">
        <Home path="/" />
        {/* <PetForm path="/new" />
        <ViewPet path="/view/:_id" />
        <EditPet path="/edit/:_id" /> */}
      </Router>
    </div>
  );
}

export default App;
