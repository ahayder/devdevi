import React from 'react';
import './App.css';
import Feed from './Timeline/Feed';
import Sidebar from './Leftbar/Sidebar'
import Widgets from './Rightbar/Widgets';
import { Switch, Route } from "react-router-dom";
import CreatePost from './Timeline/CreatePost';


function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/create">
          <Sidebar />
          <Feed createPost={true} pageTitle={"Add a new portfolio"} />
          <Widgets />
        </Route>
        <Route path="/">
          <Sidebar />
          <Feed createPost={false} pageTitle={"Homes"} />
          <Widgets />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
