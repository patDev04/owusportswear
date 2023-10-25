import React from 'react';
import './auth.scss';
import { NavLink, Outlet } from 'react-router-dom';
import authImg from '../../Images/new-pics/IMG-20230115-WA0020.jpg';

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth-wrapper">
        <div className="img-con">
          <img src={authImg} className="auth-img" alt="" />
        </div>

        <div className="auth-content">
          <div className="auth-tab">
            <NavLink to="/auth/login" className="auth-link">
              Sign In
            </NavLink>
            <NavLink to="/auth/register" className="auth-link">
              Create Account
            </NavLink>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Auth;
