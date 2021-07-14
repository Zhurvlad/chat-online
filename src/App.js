import React from 'react';
import {Route} from "react-router";
import {Home, Auth} from "./pages";

function App() {
  return (
    <div className="wrapper">
        <Route exact path={['/',  '/login', '/registration']} component={Auth}/>
        <Route exact path={['/am']} component={Home}/>
    </div>
  );
}

export default App;
