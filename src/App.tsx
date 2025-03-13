import { useRoutes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';

// import AddProduct from './pages/AddProduct'
// import EditProduct from './pages/EditProduct'
// import Register from './pages/Register'
// import Login from './pages/Login'

const routes = [
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/product/add',
    element: <AddProduct/>
  },
  // {
  //   path:'/product/edit/:id',
  //   element: <EditProduct/>
  // },
  // {
  //   path:'/register',
  //   element: <Register/>
  // },
  // {
  //   path:'/login',
  //   element: <Login/>
  // }
]

function App() {
  const router = useRoutes(routes);
  return(
    <main>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          TYPESCRIPT
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/product/add">
                Product Add
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="container my-2">{router}</div>
  </main>
  )
}

export default App
