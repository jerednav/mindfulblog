import React from "react";
import Topbar from "./components/topbar/Topbar";
import Settings from "./pages/settings/Settings";
// import Home from "./pages/home/Home";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";

function App() {
  return (
    <div className='App'>
      <>
        <Topbar />
        <Settings />
      </>
    </div>
  );
}

export default App;
