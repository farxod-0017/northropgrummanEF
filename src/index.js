import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import HomePageA from './pages/HomePageA'
import PageA1 from './pages/PageA1';
import PageA2 from './pages/PageA2';
import PageA3 from './pages/PageA3';
import PageA4 from './pages/PageA4';
import PageA5 from './pages/PageA5';
import PageA6 from './pages/PageA6';
import PageA7 from './pages/PageA7'
import PageXulosa from './pages/PageXulosa';

const root = ReactDOM.createRoot(document.getElementById('root'));
const myRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:'/1',
      element:<Page1/>
    },
    {
      path:'/2',
      element:<Page2/>
    },
    {
      path:'/3',
      element:<Page3/>
    },
    {
      path:'/4',
      element:<Page4/>
    },
    {
      path:'/5',
      element:<Page5/>
    },
    {
      path:'/6',
      element:<Page6/>
    },
    {
      path:'/7',
      element:<Page7/>
    },
    {
      path:"/8",
      element:<HomePageA/>
    },
    {
      path:'/9',
      element:<PageA1/>
    },
    {
      path:'/10',
      element:<PageA2/>
    },
    {
      path:'/11',
      element:<PageA3/>
    },
    {
      path:'/12',
      element:<PageA4/>
    },
    {
      path:'/13',
      element:<PageA5/>
    },
    {
      path:'/14',
      element:<PageA6/>
    },
    {
      path:'/15',
      element:<PageXulosa/>
    },
    {
      path:'/16',
      element:<PageA7/>
    }
  ]
}])
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>
);


