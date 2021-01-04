import './App.css';
import {HashRouter, Route ,Switch} from 'react-router-dom'
import Header from './components/header/header.js'
import Dashboard from './components/dashboard/dashboard.js'

function App() {
  return (
    <div className="App">
      
      <HashRouter >
        <Header/>
          <Switch>
             <Route exact path='/' component = {Dashboard} />
             <Route path='/home' component = {Dashboard} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
