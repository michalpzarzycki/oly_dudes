import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

interface LoadingRouterProps {

}

export const LoadingRouter: React.FC<LoadingRouterProps> = ({}) => {
    return (
      <Router>
      <div>
        <Switch>
          <Route />
        </Switch>
      </div>
    </Router>
    );
}