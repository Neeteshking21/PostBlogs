import { Fragment } from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
// import Home from './Components/Dashboard/Home';
// import Login from './Components/Authentications/Login';
// import Signin from './Components/Authentications/SignIn';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Protected from './Components/Protected';


/* Define Basic Routes Of MyTroops */
const router = createBrowserRouter([

  // {
  //   path: "/",
  //   element: <Protected Component={Home} />
  // },
  // {
  //   path: "logIn",
  //   element: <Login />
  // },
  // {
  //   path: "signIn",
  //   element: <Signin />
  // },
  // {
  //   'path': 'dashboard',
  //   element: <Protected Component={Dashboard} />
  // }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
