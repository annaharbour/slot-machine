import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Machine from './Machine'

export const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies();
  const [userId, setUserId] = useState(null); 

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
    try {
      const { data } = await axios.post(
        'http://localhost:4000',
        {},
        { withCredentials: true }
      );

      const { status, userId, username } = data;
      if (status) {
        setUsername(username); 
        setUserId(userId); 
      } else {
        removeCookie('token');
        navigate('/signin');
      }
    } catch (error) {
      console.error('Error verifying cookie:', error);
      removeCookie('token');
      navigate('/signin');
    }
  };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <div>
      <Machine username={username} userId={userId}/>
      <button className="logout" onClick={Logout}>Logout</button>
    </div>
  );
};

