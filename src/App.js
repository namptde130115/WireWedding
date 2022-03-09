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


function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}

      {/* <HomePage /> */}
      <HomePage_customer />
      {/* <HomePage_ideas /> */}
      {/* <HomePage_blog /> */}
      {/* <ProfilePage /> */}
    </div>
  );
}

export default App;