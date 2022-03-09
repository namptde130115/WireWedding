import React from 'react';
import './App.scss';
//antd
import 'antd/dist/antd.css';
//components
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { Counter } from './features/counter/Counter';

import { HomePage } from './pages/homepage';
import { Service } from './pages/servicepage';
import { ProfilePage } from './pages/profile';
import { ServiceDetail } from './pages/service_detail'

function App() {
  return (
    <div>
      <ServiceDetail/>
    </div>
  );
}

export default App;
