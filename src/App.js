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
import { HomePage_blogDetail } from './pages/homepage/homepage_blogDetail'
import { HomePage_myBlogs } from './pages/homepage/homepage_myBlogs'
import { HomePage_aboutUs } from './pages/homepage/homepage_aboutUs'
import { HomePage_createBlog } from './pages/homepage/homepage_createBlog'
import { ProfilePage } from './pages/profile';


function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}

      {/* <HomePage /> */}
      {/* <HomePage_customer /> */}
      <HomePage_ideas />
      {/* <HomePage_blogDetail /> */}
      {/* <HomePage_myBlogs /> */}
      {/* <HomePage_aboutUs /> */}
      {/* <HomePage_createBlog /> */}
      {/* <ProfilePage /> */}
    </div>
  );
}

export default App;