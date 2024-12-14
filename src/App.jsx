
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Main from './Layout/Main'
import Home from './componets/Home/Home';
import Login from './componets/Login/Login';
import Resitation from './componets/Resistation/Resitation';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/Login",
        element:<Login></Login>
      },
      {
        path:"/Resitation",
        element:<Resitation></Resitation>
      },
    ],
  },
]);
function App() {

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
