import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ContactPage from '../contact/index';
import PortfolioPage from '../portfolio/index';
import AboutPage from '../About/index';
import HomePage from '../home/index';
import Nav from 'react-bootstrap/Nav';

export default function App() {
  return (
    <Router>
      <div>
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/contact" >
       Contact
      </Nav.Link>
    </Nav.Item>
        </Nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <div className= 'container'>
              <About/>
            </div>
          </Route>
          <Route path="/contact">
           <div className="container">
           <Contact/>
           </div>
          </Route>
          <Route path="/portfolio">
           <div className="container">
             <ThePortfolio/>
           </div>
          </Route>
          <Route path="/">
           <div className="container">
           <Home />
           </div>
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <HomePage/>;
}

function About() {
  return <AboutPage/>;
}

function Contact() {
  return <ContactPage/>;
}

function ThePortfolio() {
  return <PortfolioPage/>;
}