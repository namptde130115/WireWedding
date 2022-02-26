import React from 'react';
import './App.scss';
//antd
import 'antd/dist/antd.css';
//components
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { Counter } from './features/counter/Counter';
import { HomePage } from './pages/homepage';

function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <HomePage />
    </div>
  );
}

export default App;
