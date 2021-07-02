import {BrowserRouter as Router, Switch , Route}  from 'react-router-dom';
import HomePage from './Components/HomaPage/HomePage'
import './App.css';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <HomePage />
        </Route>
      </Switch>
    </Router>
  );
} 

export default App;