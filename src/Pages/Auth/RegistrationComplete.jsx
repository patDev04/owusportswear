import React, { useState, useEffect } from 'react';
import { UserOutlined, MailOutlined, UserAddOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { RiLockPasswordLine } from 'react-icons/ri';
import './login.scss';

const RegistrationComplete = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail(window.localStorage.getItem('emailForRegistration'));
  }, []);

  const handleCompleteForm = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="complete-page">
      <form clas className="complete-form" onSubmit={handleCompleteForm}>
        <div className="input-group">
          <Input
            value={email}
            type={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small"
            placeholder="Email"
            prefix={<MailOutlined className="placerholder-icon" />}
            disabled={true}
          />
        </div>
        <div className="input-group">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            type="password"
            placeholder="Password"
            prefix={<RiLockPasswordLine className="placerholder-icon" />}
          />
        </div>

        <button type="submit" className="login-btn">
          Complete Registration
        </button>
      </form>
    </div>
  );
};

export default RegistrationComplete;
