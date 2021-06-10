import {LoadingRouter, SignedOutRouter, SignedInRouter} from './routers'
import { useSelector, RootStateOrAny } from 'react-redux'
import './App.css';

function App(): JSX.Element {

  //signedIn, signedOut, loading
  let loginStatus = useSelector((state: RootStateOrAny) => state.user.loginStatus)
  
  return (
    <div className="App">
      {console.log(loginStatus)}
      {loginStatus === 'signedIn' && <SignedInRouter />}
      {loginStatus === 'signedOut' && <SignedOutRouter />}
      {loginStatus === 'loading' && <LoadingRouter />}
    </div>
  );
}

export default App;
