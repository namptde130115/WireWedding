//content.js
import React from "react";
import styles from './index.module.scss';
import clsx from 'clsx';
import { Input } from 'antd';

export default ({ close }) => (
    <div className={clsx(styles.modal)}>
        <a className={clsx(styles.close)} onClick={close}>
            &times;
        </a>
        <div className={clsx(styles.header)}>Add Category</div>
        <div className={clsx(styles.content)}>
            Name:
            <Input
                className={clsx(styles.input_budget)}
                placeholder="Input your category name" type="text"/>
        </div>
    </div>
);