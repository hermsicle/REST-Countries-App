import './App.scss';
import Home from './components/Home/Home'
import {Switch, Route} from 'react-router-dom'
import MoreInfo from './components/moreInfo/MoreInfo';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/'> <Home/> </Route>
        <Route path='/country'> <MoreInfo/> </Route>
      </Switch>
    </div>
  );
}

export default App;
