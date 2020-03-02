import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from './components/navbar';
// import Footer from './components/footer/index';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ReportAnIssue from './pages/ReportAnIssue';
import Security from './pages/Security';
import SignUp from './pages/SignUp';
import Wrapper from './components/wrapper';


function App() {
  return (
    <Router>
    <div>
      <Wrapper>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/report-an-issue" component={ReportAnIssue}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/security" component={Security}/>
        <Route exact path="/sign-up" component={SignUp}/>
      </Wrapper>
    </div>
    </Router>

  );

}

export default App;


