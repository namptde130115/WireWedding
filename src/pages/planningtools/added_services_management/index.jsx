import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Card, Col, Row, Space, Button } from 'antd';
import clsx from 'clsx';
import { ServiceBox } from '../../../components/ServiceBox';

export const MyService = () => {
  return (
    <div className={clsx(styles.body)}>
      {/* Your Progress */}
      <div className={clsx(styles.services)}>
        <p className={clsx(styles.your_service_text)}>Your Added Services</p>

        <div className={clsx(styles.services_list)}>
          <ServiceBox data={{ name: 'Studio' }} />
          <ServiceBox data={{ name: 'Dress & Attire' }} />
          <ServiceBox data={{ name: 'Jewelry' }} />
          <ServiceBox data={{ name: 'Transportation' }} />
          <ServiceBox data={{ name: 'Musicians & Bands' }} />
          <ServiceBox data={{ name: 'Venues' }} />
          <ServiceBox data={{ name: 'Cakes' }} />
          <ServiceBox data={{ name: 'Makeup' }} />
          <ServiceBox data={{ name: 'Lighting & Decor' }} />
        </div>
      </div>
    </div>
  );
};
