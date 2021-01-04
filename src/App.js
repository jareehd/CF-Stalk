import './App.css';
import {HashRouter, Route ,Switch} from 'react-router-dom'
import Header from './components/header/header.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <HashRouter >
          <Switch>
             <Route exact path='/a' component = {Header} />
             <Route path='/b' component = {Header} />
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
