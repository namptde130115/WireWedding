import React from 'react';
import './App.scss';
//antd
import 'antd/dist/antd.css';
//components
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { Counter } from './features/counter/Counter';

import { HomePage } from './pages/homepage'
import { HomePage_customer } from './pages/homepage/homepage_customer'
import { HomePage_ideas } from './pages/homepage/homepage_ideas'
import { HomePage_blog } from './pages/homepage/homepage_blog'
import { ProfilePage } from './pages/profile';
import { Service } from './pages/servicepage'
import { ServiceDetail } from './pages/service_detail'
import { ServicePack } from './pages/servicepackpage'
import { ServicePackDetail } from './pages/servicepackdetail'


function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}

      {/* <HomePage /> */}
      <HomePage_customer />
      {/* <Service/> */}
      {/* { <ServicePack/> } */}
      {/* { <ServicePackDetail/> } */}
      {/* { < ServiceDetail />} */}
      {/* <HomePage_ideas /> */}
      {/* <HomePage_blog /> */}
      {/* <ProfilePage /> */}
    </div>
  );
}

export default App;