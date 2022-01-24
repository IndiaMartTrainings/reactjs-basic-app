import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Student from '../11.ajax-calls/Student';
import NameListFour from '../7.list-rendering/NameListFour';
import { About } from './About';
import { Contact } from './Contact';
import { Error } from './Error';
import { Home } from './Home';

import ApiOne from "../11.ajax-calls/ApiOne"
import NameListOne from '../7.list-rendering/NameListOne';


function Routing() {
  return (
      <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">India Mart</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">About</Link>
                            <Link to="/contact" className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>

          <Routes>
              <Route path="/" exact element={<Student />} />
              <Route path="/about"  element={<NameListFour />} />
              <Route path="/about"  element={<About />} />
              <Route path="/contact"  element={<ApiOne />} />
              <Route path="/names"  element={<NameListOne />} />
              <Route path="*"  element={<Error />} />
          </Routes>
      </Router>
  )
}

export default Routing;
