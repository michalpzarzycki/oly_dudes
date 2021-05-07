import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from '../components/Register';

export const SignedOutRouter = () => (
    <Router>
    <div>
      <Switch>
        <Route path="/" component={Register}/>
      </Switch>
    </div>
  </Router>
  )

