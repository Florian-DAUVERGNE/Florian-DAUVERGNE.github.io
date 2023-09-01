import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home.jsx';
import About from './components/about.jsx';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
