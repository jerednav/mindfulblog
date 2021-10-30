import React from "react";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className='App'>
      <>
        <Topbar />
        <Home />
      </>
    </div>
  );
}

export default App;
