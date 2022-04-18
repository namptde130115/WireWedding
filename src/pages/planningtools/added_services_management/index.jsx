import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Card, Col, Row, Space, Button } from 'antd';
import clsx from 'clsx';
import { ServiceBox } from '../../../components/ServiceBox';

export const Added_Service_Manage = () => {
  return (
    <div className={clsx(styles.body)}>
      {/* Your Progress */}
      <div className={clsx(styles.services)}>
        <p className={clsx(styles.your_service_text)}>Your Added Services</p>

        <div className={clsx(styles.services_list)}>
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
          <ServiceBox />
        </div>
      </div>
    </div>
  );
};
