import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { Admin } from './pages/admin'
import { Login } from './pages/login'
import { Networks } from './pages/networks'

const router =  createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/',
    element: <Admin/>
  },
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/',
    element: <Networks/>
  }
])

export { router };

