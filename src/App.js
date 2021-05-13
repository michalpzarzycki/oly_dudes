import { useState, useEffect } from 'react';
import {LoadingRouter, SignedOutRouter, SignedInRouter} from './routers'
import { useSelector } from 'react-redux'
import './App.css';

function App() {

  //signedIn, signedOut, loading
  let loginStatus = useSelector(state => state.user.loginStatus)
  
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
