import Home from './pages/Home/Home'
import Error from './error/error'
import './App.scss'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'

const home = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
    }
])



function App() {

  return (
    <>
      <RouterProvider router={home}/>
    </>
  )
}

export default App
