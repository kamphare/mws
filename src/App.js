import './App.css';
import { SolsList } from './components/SolsList'
import { SolDetails } from './components/SolDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App grid--layout background">
      <header className="header">
        <nav className="nav grid--nav">
          <div className="nav__logo">
            MWS
          </div>
          <div className="nav__title">
            Mars Weather Service
          </div>
        </nav>
      </header>
      <main className="main">
        <Router>
        <Switch>
          <Route path="/details/:id">
            <SolDetails />
          </Route>
          <Route path="/">
            <SolsList />
          </Route>
        </Switch>
        </Router>
      </main>
      <footer className="footer">
        <p>hello</p>
      </footer>
    </div>
  );
}

export default App;
