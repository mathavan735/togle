import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import HelloClassComponent from '../HelloClassComponent/HelloClassComponent';
import StateDemo from '../StateDemo/StateDemo';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/page1">Page 1</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
           
          </ul>
        </nav>

        <Switch>
          <Route path="/page1" component={HelloClassComponent} />
          <Route path="/page2" component={StateDemo} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
