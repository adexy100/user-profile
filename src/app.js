import React from 'react';
import { withAuthentication } from './components/Session';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import SignInPage from './components/SignIn';
import SignUpPage from './components/SignUp';
import Home from './components/home/home';
import Admin from './components/admin/admin';
import UserItem from './components/admin/components/userItem';
import AccountPage from './components/account';
import ForgotPassword from './components/PasswordForget';
import PasswordChangeForm from './components/PasswordChange';

const App = () => {
  return (
  	<Router>
		<div>
			<Navbar />
	      	<Route exact path="/" component={Main} />
	      	<Route path="/Home" component={Home} />
		    <Route path="/admin" component={Admin} />
		    <Route path="/admin/:id" component={UserItem} />
        	<Route path="/account" component={AccountPage} />
	      	<Route path="/signin" component={SignInPage} />
	      	<Route path="/signup" component={SignUpPage} />
	        <Route path="/forgotpassword" component={ForgotPassword} />
		   	<Route path="/changepassword" component={PasswordChangeForm} />
		</div>
	</Router>
  );
};

export default withAuthentication(App);
