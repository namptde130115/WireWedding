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
import { PlanningTools } from './pages/planningtools/planningtools_home';
import { Added_Service_Manage } from './pages/planningtools/added_services_management';
import { Hired_Service_Manage } from './pages/planningtools/hired_services_manangement';
import { Budget } from './pages/planningtools/budget';
function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <HomePage /> */}
      {/* <ProfilePage /> */}
      <PlanningTools />
      {/* <Added_Service_Manage /> */}
      {/* <Hired_Service_Manage /> */}
      {/* <Budget/> */}
    </div>
  );
}

export default App;
