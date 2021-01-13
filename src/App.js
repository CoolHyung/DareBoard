import './App.css';
import { Route, Switch } from 'react-router-dom'
import StartPage from './StartPage';
import GamePage from './GamePage';

function App() {
 
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/game" component={GamePage} />
      </Switch>
    </div>
  );
}

export default App;
