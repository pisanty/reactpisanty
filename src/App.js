import './App.css';
import Todos from './components/Todos';
//import React from "react";
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
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

//export default App;

function TabApp() {
  const [value, setValue] = useState('one');

  const handleChange = (event, value) => {
    setValue(value);
  };
  
  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab value="one" label="Home" />
          <Tab value="two" label="Todos" />
          <Tab value="three" label="Users"/>
        </Tabs>
      </AppBar>
      {value === 'one' && <div>{Home()}</div>}
      {value === 'two' && <div>{App()}</div>}
      {value === 'three' && <div>Users</div>}
    </div>
  );
}

export default TabApp;