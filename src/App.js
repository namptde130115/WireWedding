import React from 'react';
import './App.scss';
//components
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div>
      {/* <SignIn /> */}
      <SignUp />
    </div>
  );
}

export default App;
