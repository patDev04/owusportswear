import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { MailOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Login = () => {
  return (
    <form className="login-form">
      <h1 className="welcome-title">Welcome to owusportswear</h1>
      <br />
      <br />
      {/*<div className="input-group">
        <Input
          size="small"
          placeholder="Username"
          prefix={<UserOutlined className="placerholder-icon" />}
        />
  </div>*/}
      <div className="input-group">
        <Input
          size="small"
          placeholder="Email"
          prefix={<MailOutlined className="placerholder-icon" />}
        />
      </div>
      <p className="login-info">
        Dont have an account?
        <Link to="/auth/register">Create an acount here </Link>, it takes less
        then a mintue
      </p>
      <button type="submit" className="login-btn">
        Sign in
      </button>
    </form>
  );
};

export default Login;
