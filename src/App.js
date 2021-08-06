import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';



 const App = () => {
  return (
    <React.Fragment>
    <BrowserRouter>
    <div className="container app_container">

      <div className="row app_row">

          <div className="col-3">
              <div className="app_sidebar">
              <Sidebar/>
              </div>
          </div>

      <div className="app__main-div col-lg-9 ">
        <Navbar/>
        <Switch>
        <Route exact path="/"> <About /> </Route>
        <Route exact path="/resume"> <Resume /> </Route>
        <Route exact path="/projects"> <Projects /> </Route>
        <Route> <Redirect to="/" /></Route>
        </Switch>
      </div>

    </div>
    </div>
    </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
