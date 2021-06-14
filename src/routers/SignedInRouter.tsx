import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Dashboard} from '../components/dashboard/Dashboard';

interface SignedInRouterProps {

}

export const SignedInRouter: React.FC<SignedInRouterProps> = ({}) => {
    return (
      <Router>
      <div>
        <Switch>
          <Route path='/' component={Dashboard} />
        </Switch>
      </div>
    </Router>
    );
}