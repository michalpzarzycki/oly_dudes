import { useState } from 'react';
import {LoadingRouter, SignedOutRouter, SignedInRouter} from './routers'
import './App.css';

function App() {
  //signedIn, signedOut, loading
  const [ loginStatus, setLoginStatus ] = useState('signedOut');
  
  return (
    <div className="App">
      {loginStatus === 'signedIn' && <SignedInRouter />}
      {loginStatus === 'signedOut' && <SignedOutRouter />}
      {loginStatus === 'loading' && <LoadingRouter />}
    </div>
  );
}

export default App;
