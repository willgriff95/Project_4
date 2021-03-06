import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


import 'bulma';
import './scss/style.scss';
import '../node_modules/react-star-rating/dist/css/react-star-rating.min.css';

import Home from './components/Home';
import ProfileEdit from './components/profile/Edit';
import UsersShow from './components/users/Show';
import ProfileShow from './components/profile/Show';
import JobsIndex from './components/jobs/Index';
import JobsNew from './components/jobs/New';
import JobsShow from './components/jobs/Show';
import JobsEdit from './components/jobs/Edit';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import SecureRoute from './components/common/SecureRoute';
import FlashMessages from './components/common/FlashMessages';
import NotFound from './components/common/NotFound';
// import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
// import Auth from './lib/Auth';




class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="noneResponsive">
            <div className="underConstruction">Please expand your browser, this site is currently under construction for smaller browsers</div>
          </div>
          <div className="appJsBody">
            <Navbar />
            <FlashMessages />
            <Switch>
              {/* Decorator component => the BrowserRouter decorates the component with useful stuff like location, match, history which can be accessed with this.props inside of each component */}
              <SecureRoute path="/profile/:id/edit" component={ProfileEdit} />
              <SecureRoute path="/profile/:id" component={ProfileShow} />
              <SecureRoute path="/users/:id" component={UsersShow} />
              <SecureRoute path="/jobs/new" component={JobsNew} />
              <Route path="/jobs/:id/edit" component={JobsEdit} />
              <Route path="/jobs/:id" component={JobsShow} />
              <Route path="/jobs" component={JobsIndex} />
              <Route path="/register" component={AuthRegister} />
              <Route path="/login" component={AuthLogin} />
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
            <div className="background"></div>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
