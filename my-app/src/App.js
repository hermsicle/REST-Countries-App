import './App.scss';
import Home from './components/Home/Home'
import {Switch, Route} from 'react-router-dom'
import MoreInfo from './components/moreInfo/MoreInfo';
import {Context} from './components/Context'
import {useContext} from 'react'

function App() {

  const {darkMode} = useContext(Context)

  return (
    <div className={`App ${darkMode ? 'darkmode' : ''}`}>

      <Switch>
        <Route exact path='/'> <Home/> </Route>
        <Route path='/country'> <MoreInfo/> </Route>
      </Switch>

      <footer className={`footer ${darkMode ? 'darkmode' : ''}`}></footer>
    </div>
  );
}

export default App;
