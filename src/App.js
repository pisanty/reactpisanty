import './App.css';
import Todos from './components/Todos';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h1>Welcome home!</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>{''}
        <Link to="/Todos">Todos</Link>{Todos}
        <Link to="/users">Users</Link>{''}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Todos" component={Todos} />
          <Route path="/users" render={() => <h2>Users</h2>} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
