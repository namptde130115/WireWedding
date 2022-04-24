import React, {useState, useRef} from 'react'
import clsx from "clsx";
import styles from "./index.module.scss";
import emailjs from '@emailjs/browser';

const initialState = {
    email: '',
    err: '',
    success: ''
}

export const ForgotPassword = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_595rijv', 'template_voqxv85', form.current, 'tqhUmo4tkYnAZeiTC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className={clsx(styles.fg_pass)}>
    <h2>Forgot Your Password?</h2>

    <div className={clsx(styles.row)}>
        <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="email">Enter your email address</label>
        <input type="email" name="user_email"/>
        <input className={clsx(styles.verify_btn)}  type="submit" value="Verify your email" />
        </form>
    </div>
    </div>
  );
};
  