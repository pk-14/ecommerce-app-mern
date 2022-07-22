import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/layout/Header/Header.js";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, []);

  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />

      <Footer />
    </Router>
  );
}

export default App;