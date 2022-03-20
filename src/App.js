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
<<<<<<< HEAD
import { Service } from './pages/servicepage'
import { ServiceDetail } from './pages/service_detail'
import { ServicePack } from './pages/servicepackpage'
import { ServicePackDetail } from './pages/servicepackdetail'
import { ManageService } from './pages/manageservice';

=======
import { PrivateRoute } from './router/privateRoute';
import { Service } from './pages/servicepage';
>>>>>>> 0ea75ffccb47b78595a8bed380defdc98fc00f97

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
<<<<<<< HEAD
      {/* <Service/> */}
      {/* { <ServicePack/> } */}
      { <ServicePackDetail/> }
      {/* { < ServiceDetail />} */}
      {/* { <ManageService/>} */}
=======
>>>>>>> 0ea75ffccb47b78595a8bed380defdc98fc00f97
      {/* <HomePage_ideas /> */}
      {/* <HomePage_blog /> */}
      {/* <ProfilePage /> */}
    </BrowserRouter>
  );
}

export default App;
