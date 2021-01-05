import './App.css';
import {HashRouter, Route ,Switch} from 'react-router-dom'
import Header from './components/header/header.js'
import Dashboard from './components/dashboard/dashboard.js'
import CompareDashboard from './components/compareDashboard/compareDashboard.js'
import User from './components/user/user.js'

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Header/>
          <Switch>
             <Route exact path='/' component = {Dashboard} />
             <Route path='/user' component = {User} />
             <Route path='/compare' component = {CompareDashboard} />
             
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
