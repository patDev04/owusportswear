import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined, MailOutlined, UserAddOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { RiLockPasswordLine } from 'react-icons/ri';
import { sendSignInLinkToEmail, signInWithPopup } from 'firebase/auth';
import { googleAuth, auth } from './../../firebase';
import { toast } from 'react-toastify';
// require('dotenv').config();

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const config = {
    url: process.env.REACT_APP_REDIRECT_URL,
    handleCodeInApp: true,
  };

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    try {
      await sendSignInLinkToEmail(auth, email, config);
      toast.success(
        `You have succesfully registered and a link has been sent to ${email}`
      );
      window.localStorage.setItem('emailForRegister');
      setEmail('');
    } catch (error) {
      console.log(error);
    }
  };

  // const signinWithGoogle = async () => {
  //   try {
  //     await signInWithPopup(auth, googleAuth);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ...
  // });

  // const formValidation = () => {
  //   const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
  //   if (regx.test(email)) {
  //     setMessage('email is valid');
  //     const validEmail = setEmail(email);
  //     return validEmail;
  //   } else if (!regx.test(email || email !== '')) {
  //     setMessage('email is not valid');
  //   } else setMessage('');
  // };

  return (
    <form className="login-form" onSubmit={handleRegisterForm}>
      <h1 className="welcome-title">Welcome to owusportswear</h1>
      <p className="login-info">
        Sign in to get in the moment updates on the things that interest you.
      </p>
      {/*  <div className="input-group">
        <Input
          size="small"
          placeholder="Full Name"
          prefix={<UserOutlined className="placerholder-icon" />}
        />
      </div>
      <div className="input-group">
        <Input
          size="small"
          placeholder="Username"
          prefix={<UserAddOutlined className="placerholder-icon" />}
        />
      </div>
  */}
      <div className="input-group">
        <Input
          value={email}
          type={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
          placeholder="Email"
          prefix={<MailOutlined className="placerholder-icon" />}
        />
      </div>
      {/* <div className="input-group">
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          size="small"
          type="password"
          placeholder="Password"
          prefix={<RiLockPasswordLine className="placerholder-icon" />}
        />
</div>*/}
      {/*   <div className="input-group">
        <button onClick={signinWithGoogle}>sign in with google</button>
      </div>*/}
      {/*  <div className="input-group">
      <Input
        size="small"
        placeholder="Re-enter Password"
        prefix={<RiLockPasswordLine className="placerholder-icon" />}
      />
  </div>*/}

      <button type="submit" className="login-btn">
        Create Account
      </button>
    </form>
  );
};

export default Register;
