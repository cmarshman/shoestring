import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ReportAnIssue from './pages/ReportAnIssue';
import SignUp from './pages/SignUp';
import Wrapper from './components/wrapper';
import Footer from './components/footer';
import Landing from './pages/Landing';
import FindAFriend from './pages/FindAFriend';
import TransferMoney from './pages/TransferMoney';
import MyWallet from './pages/MyWallet';
import CurrencyConverter from './pages/CurrencyConverter';
import Reset from '../src/pages/ResetPwd'
import UserProfile from './pages/UserProfile'

function App(item) {
   
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
        <Route exact path="/sign-up" component={SignUp}/>
        <Route exact path="/home" component={Landing}/>
        <Route exact path="/reset" component={Reset}/>
        <Route exact path="/findafriend" component={FindAFriend}/>
        <Route exact path="/transfermoney" component={TransferMoney}/>
        <Route exact path="/mywallet" component={MyWallet}/>
        <Route exact path="/currencyconverter" component={CurrencyConverter}/>
        <Route exact path={`/user-profile/${item.name}`} component={UserProfile}/>
      </Wrapper>
    </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;