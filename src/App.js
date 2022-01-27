import React, {useState, UseContext} from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import { KitContext } from "./context/KitContext";
import { KitQuantityContext } from "./context/KitQuantityContext";


function App() {
  const [kits, setKits] = useState([]);
  const [kitQuantity, setKitQuantity] = useState();

  return(
   <KitQuantityContext.Provider value={{kitQuantity, setKitQuantity}}>
     <KitContext.Provider value ={{kits, setKits}}>
       <Router>
         <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/dashboard" component={Dashboard} />
         </Switch>
       </Router>
     </KitContext.Provider>
   </KitQuantityContext.Provider>
  );
}

export default App;
