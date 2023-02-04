import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';


import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
