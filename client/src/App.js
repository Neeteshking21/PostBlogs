import { Fragment, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import {useDispatch} from 'react-redux'
import { addToken } from './Redux/Reducers/Auth/auth.action'

import Home from './Components/Dashboard/Home';
import Login from './Components/Authentications/Login';
import Signin from './Components/Authentications/SignIn';
import Protected from './Components/Authentications/Protected';
import { getToken } from './Components/Authentications/Helper'

import './App.css'


/* Define Basic Routes Of MyTroops */
const router = createBrowserRouter([
  {
    path: "/",
    // element: <Protected Component={Home} />
    element: <Home/>
  },
  {
    path: "logIn",
    element: <Login />
  },
  {
    path: "signIn",
    element: <Signin />
  }
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let is_token_found = getToken();
    if (is_token_found.status === "success") {
      dispatch(addToken(is_token_found.addToken))
    }
  }, [])
  return (
    <div className="src-app-main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
