import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss';
import CallPage from './Components/CallPage';
import HomePage from './Components/HomePage';
import NoMatch from './Components/NoMatch';
function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/:id">
          <CallPage/>
         </Route>
         <Route exact path="/">
           <HomePage/>
         </Route>
         <Route exact path="*">
          <NoMatch/>
         </Route>
       </Switch>
     </Router>
     
    </div>
  );
}

export default App;
