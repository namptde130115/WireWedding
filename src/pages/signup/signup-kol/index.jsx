import React from "react";
import { LoginLayout } from "../../../layout/login/index";
import styles from "./index.module.scss";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import { signUpKol } from "../../../redux/kolSlice";

export const SignUpKol = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const loading = useSelector((state) => state.user.registerLoading);
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      console.log("aaaaa");
      const actionResult = await dispatch(
        signUpKol(values)
      );
      const response = unwrapResult(actionResult);
      if (response) {
        // navigate("/");
        console.log("response", response);
      }
    } catch (error) {}
  };
  return (
    <LoginLayout>
      <div className={styles.signUp__container}>
        <div>{loading}</div>
        <p className={styles.title}>Sign Up</p>
        <div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password className={styles.input__antd} />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                { required: true, message: "Please input your address!" },
              ]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input your description!" },
              ]}
            >
              <Input className={styles.input__antd} />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </LoginLayout>
  );
};
