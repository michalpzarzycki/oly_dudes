import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';

export const SignedInRouter = () => (
    <Router>
    <div>
      <Switch>
        <Route path='/' component={Dashboard} />
      </Switch>
    </div>
  </Router>
  )

