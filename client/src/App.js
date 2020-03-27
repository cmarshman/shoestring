import React from 'react';
import {BrowserRouter as Router,Route, Redirect, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ReportAnIssue from './pages/ReportAnIssue';
import Security from './pages/Security';
import SignUp from './pages/SignUp';
import Wrapper from './components/wrapper';
import Footer from './components/footer';
import Landing from './pages/Landing';
 
function App() {
  return (
    <>
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
        <Route exact path="/home" component={Landing}/>
        <Redirect from='/login/' to="/" />
       </Wrapper>
    </div>
    </Router>
    <Footer/>
    </>
  );

}

export default App;


