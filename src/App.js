import './App.css';
import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './home/Home';
import FilterFunctionality from './filter/Filter'
import ScrollDialog from './modal/ModalFilter';
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App({props}) {
  return (
    <div className="App">
      <Header/>
        <Home/>
        <FilterFunctionality/>
        {/* <ScrollDialog/> */}
        <Footer />
      
      {/* <Router>
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </ Router> */}
    </div>
  );
}

export default App;


