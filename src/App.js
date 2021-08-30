import './App.css';
import {useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home, Profile, Login, Register } from './pages';
import {AuthContext} from './contex/AuthContext';

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
           {user ? <Home /> : <Register />}
          </Route>
          <Route exact path="/register">
          {user ? <Redirect to="/"/> : <Register /> }
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to="/"/> : <Login /> }
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
