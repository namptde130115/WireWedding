import React from 'react';
import './App.less';
//router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//components
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { Counter } from './features/counter/Counter';

import { HomePage } from './pages/homepage';
import { HomePage_customer } from './pages/homepage/homepage_customer';
import { HomePage_ideas } from './pages/homepage/homepage_ideas';
import { HomePage_blog } from './pages/homepage/homepage_blog';
import { ProfilePage } from './pages/profile';
import { PrivateRoute } from './router/privateRoute';
import { Service } from './pages/servicepage';

function App() {
  const isAuthenticated = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/home-customer'
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              roles={['customer']}
              components={<HomePage_customer />}
            />
          }
        />
        <Route
          path='/profile/*'
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              roles={['customer']}
              components={<ProfilePage />}
            />
          }
        />
        <Route path='/services' element={<Service />} />
        {/* <Route path='/services-packs' element={< />} /> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/services' element={<Counter />} />
        <Route path='/ideas' element={<HomePage_ideas />} />
      </Routes>
      {/* <SignIn /> */}
      {/* <SignUp /> */}

      {/* <HomePage /> */}
      {/* <HomePage_customer /> */}

      <HomePage_ideas />
      {/* <HomePage_blogDetail /> */}
      {/* <HomePage_myBlogs /> */}
      {/* <HomePage_aboutUs /> */}
      {/* <HomePage_createBlog /> */}

      {/* <HomePage_ideas /> */}
      {/* <HomePage_blog /> */}

      {/* <ProfilePage /> */}
    </BrowserRouter>
  );
}

export default App;
