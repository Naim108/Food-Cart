import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import AddProducts from './components/AddProducts/AddProducts';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import About from './components/About/About';
import Found from './components/NotFound/Found';

function App() {
  return (
    <div className="App">
     <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addProduct">
            <AddProducts></AddProducts>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <Found></Found>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
