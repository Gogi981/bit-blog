import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import AuthorsPage from './AuthorsPage'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Header />
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/authors" component={AuthorsPage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Footer />
        </div>
        <div className="col-1"></div>
      </div>

    </div>

  );
}

export default App;
