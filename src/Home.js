import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Machine from './Machine'

export const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies();
  const [username, setUsername] = useState('');

  const Logout = () => {
    removeCookie('token');
    navigate('/signup');
  };

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate('/signin');
      }
      const { data } = await axios.post(
        'http://localhost:4000',
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? 
        <Machine username={username}/>
        : 
        (removeCookie('token'), navigate('/signin'));
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <div>
      <Machine/>
      <button className="logout" onClick={Logout}>Logout</button>
    </div>
  );
};