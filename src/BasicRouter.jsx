import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import PageEditor from './page-builder/PageEditor.'
import Login from './login/Login'
import Home from './home'

const BasicRouter = () => (
    <Router>
      <Switch>
        <Route exact path='/editor'>
           <PageEditor />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/home'>
           <Home />
        </Route>
        <Route path='*' render={() => (
          <Redirect to='/login'></Redirect>
        )} />
      </Switch>
    </Router>
)

export default BasicRouter
