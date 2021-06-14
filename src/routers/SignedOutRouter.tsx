import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../components/Login';
import {Register} from '../components/Register';


interface SignedOutRouterProps {

}

export const SignedOutRouter: React.FC<SignedOutRouterProps> = ({}) => {
    return (
      <Router>
      <div style={{ width: "100%", height: "100vh"}}>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>
    );
}