// Front end, we are making use of the front-end because of webpack + babel (ex: import)
// Back-end, only has support with common js (ex: require)
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
  
  // Instant component mounts on the screen grab current user
  componentDidMount() {

  }
  
  render() {
    return (
      // Div used for CSS
      <div>
        <BrowserRouter>
          {/* Routing rules */}
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path ="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
