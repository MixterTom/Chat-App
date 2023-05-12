import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Logout from './pages/Logout/Logout'
import Error from './error/error'
import './App.scss'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'

const home = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    },
    {
        path: "/logout",
        element: <Logout/>,
        errorElement: <Error/>
    },
    {
        path: "/login",
        element: <Login/>,
        errorElement: <Error/>
    }
])




function App() {

  return (
    <>
      <RouterProvider router={home}></RouterProvider>
    </>
  )
}

export default App
