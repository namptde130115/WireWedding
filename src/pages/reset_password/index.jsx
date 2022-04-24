import React, {useState, useRef} from 'react'
import clsx from "clsx";
import styles from "./index.module.scss";
import emailjs from '@emailjs/browser';

const initialState = {
    email: '',
    err: '',
    success: ''
}

export const ResetPassword = () => {
    // const {password, cf_password} = data


    // const handleResetPass = async () => {
    //     if(isLength(password))
    //         return setData({...data, err: "Password must be at least 6 characters.", success: ''})

    //     if(!isMatch(password, cf_password))
    //         return setData({...data, err: "Password did not match.", success: ''})
        
    //     try {
    //         const res = await axios.post('/user/reset', {password}, {
    //             headers: {Authorization: token}
    //         })

    //         return setData({...data, err: "", success: res.data.msg})

    //     } catch (err) {
    //         err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
    //     }
        
    // }

  return (
    <div className={clsx(styles.fg_pass)}>
            <h2>Reset Your Password</h2>

            <div className={clsx(styles.row)}>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" 
                 />

                <label htmlFor="cf_password">Confirm Password</label>
                <input type="password" name="cf_password" id="cf_password" 
                 />         

                <button  >Reset Password</button>
            </div>
        </div>
  );
};
  