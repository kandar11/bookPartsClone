import { ReactDOM } from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./components/homepage"
import Help from "./components/help"
import Blog from "./components/blog"
import About from "./components/about"

function App(){
  return (
    <Routes>
      <Route path="/" Component={Homepage}/>
      <Route path="/help" Component={Help}/>
      <Route path="/blog" Component={Blog}/>
      <Route path="/about" Component={About}/>
    </Routes>
  );
}

export default App;