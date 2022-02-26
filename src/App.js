import React from 'react';
import './App.scss';
//components
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { Counter } from './features/counter/Counter';
import {Homepage} from './pages/homepage'

function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <Homepage />
    </div>
  );
}

export default App;
