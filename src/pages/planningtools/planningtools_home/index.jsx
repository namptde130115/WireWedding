import React from 'react';
import { Layout } from 'antd';
import { PlanningToolsHeader } from '../../../layout/planningtools-header';
import { Footer } from '../../../layout/footer';
import { Overall } from '../overall';
import { Budget } from '../budget';
import { Added_Service_Manage } from '../added_services_management';
import { Route, Routes } from 'react-router-dom';
import { CheckList } from '../checklist';
import { GuestList } from '../guest-list';
import { CommonLayout } from '../../../layout/common';

export const PlanningTools = () => {
  return (
    <CommonLayout>
      <PlanningToolsHeader />
      <Routes>
        <Route index element={<Budget />} />
        <Route path='/overall' element={<Overall />} />
        <Route path='/budget' element={<Budget />} />
        <Route path='/my-servicelist' element={<Added_Service_Manage />} />
        <Route path='/checklist' element={<CheckList />} />
        <Route path='guest-list' element={<GuestList />} />
      </Routes>
    </CommonLayout>
  );
};
