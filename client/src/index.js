import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Announce from './pages/Announce';
import Contact from './pages/Contact';

const Layout = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}
const AnnouncePage = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "signin",
    element: <Login />,
  },
  {
    path: "home",
    element: <Layout />,
  },
  {
    path: "announce",
    element: <Announce />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


