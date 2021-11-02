import React from "react";
import Topbar from "./components/topbar/Topbar";
// import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import Settings from "./pages/settings/Settings";
// import Home from "./pages/home/Home";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <>
        <Topbar />
        <Register />
      </>
    </div>
  );
}

export default App;
