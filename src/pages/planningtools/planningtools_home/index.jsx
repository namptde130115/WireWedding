import React from 'react';
import { PlanningToolsHeader } from '../../../layout/planningtools-header';
import { Overall } from '../overall';
import { Budget } from '../budget';
import { MyService } from '../added_services_management';
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
        <Route path='/my-servicelist' element={<MyService />} />
        <Route path='/checklist' element={<CheckList />} />
        <Route path='/guest-list' element={<GuestList />} />
      </Routes>
    </CommonLayout>
  );
};
