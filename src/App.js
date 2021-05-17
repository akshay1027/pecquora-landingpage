import React, {Suspense} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
const LazyNavBar  = React.lazy( () => import("./components/Navbar"));
const LazyAbout  = React.lazy( () => import("./screens/about"));
const LazyImpact  = React.lazy( () => import("./components/Impact"));
const LazyDeveloper  = React.lazy( () => import("./components/Developer"));
const LazyFeatures  = React.lazy( () => import("./components/Features"));
const LazyFaq  = React.lazy( () => import("./components/Faq"));


// use callbacks instead of "function App()"

const App = () =>  {
  
  return (
    <Router className="App">
      <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', marginTop:'50px'}}>Loading...</div>}>
      <LazyNavBar /> {/* header will be present in all pages */}
         <Switch>

          <Route path="/">
              <LazyAbout />
              <LazyImpact />
              <LazyFeatures />
              <LazyDeveloper />
              <LazyFaq />
          </Route>

          </Switch>
          </Suspense>
    </Router>
  );
} 

export default App;

