import React from 'react';
import './App.less';
//router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//components
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';

import { HomePage } from './pages/homepage';
import { HomePage_customer } from './pages/homepage/homepage_customer';
import { HomePage_ideas } from './pages/homepage/homepage_ideas';
import { HomePageBlogDetail } from './pages/homepage/homepage_blogDetail';
import { ProfilePage } from './pages/profile';
import { PrivateRoute } from './router/privateRoute';
import { Service } from './pages/servicepage';
import { ServicePack } from './pages/servicepackpage';
import { HomePageAboutUs } from './pages/homepage/homepage_aboutUs';
import { HomePageCreateBlog } from './pages/homepage/homepage_createBlog';
import { HomePageMyBlogs } from './pages/homepage/homepage_myBlogs';
import { VendorSignUp } from './pages/signup-vendor';
import { AdminPage } from './pages/Admin';

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
        <Route
          path='/ideas/create-blog'
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              roles={['customer', 'kol', 'vendor']}
              components={<HomePageCreateBlog />}
            />
          }
        />
        <Route
          path='/ideas/my-blogs'
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              roles={['customer', 'kol', 'vendor']}
              components={<HomePageMyBlogs />}
            />
          }
        />
        <Route
          path='/admin/*'
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              roles={['customer', 'kol', 'vendor']}
              components={<AdminPage />}
            />
          }
        />
        <Route path='ideas/blog-details' element={<HomePageBlogDetail />} />
        <Route path='/services-packs' element={<ServicePack />} />
        <Route path='/services' element={<Service />} />
        <Route path='/about-us' element={<HomePageAboutUs />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/ideas' element={<HomePage_ideas />} />
        <Route path='/vendor-signup' element={<VendorSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
