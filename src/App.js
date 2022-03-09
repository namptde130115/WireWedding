import React from 'react';
import './App.scss';
//antd
import 'antd/dist/antd.css';
//components
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { Counter } from './features/counter/Counter';
<<<<<<< HEAD

import { HomePage } from './pages/homepage'
import { HomePage_customer } from './pages/homepage/homepage_customer'
import { HomePage_ideas } from './pages/homepage/homepage_ideas'
import { HomePage_blog } from './pages/homepage/homepage_blog'
import { ProfilePage } from './pages/profile';

=======
import { HomePage } from './pages/homepage';
import { ProfilePage } from './pages/profile';
>>>>>>> 330b0961327440f2bd615b995fff677661795ce7

function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
<<<<<<< HEAD

      {/* <HomePage /> */}
      <HomePage_customer />
      {/* <HomePage_ideas /> */}
      {/* <HomePage_blog /> */}
=======
      <HomePage />
>>>>>>> 330b0961327440f2bd615b995fff677661795ce7
      {/* <ProfilePage /> */}
    </div>
  );
}

export default App;
