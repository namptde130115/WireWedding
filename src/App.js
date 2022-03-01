import React from 'react';
import './App.scss';
//antd
import 'antd/dist/antd.css';
//components
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { Counter } from './features/counter/Counter';
import { HomePage } from './pages/homepage';
import { ProfilePage } from './pages/profile';

function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <HomePage />
      {/* <ProfilePage /> */}
    </div>
  );
}

export default App;
