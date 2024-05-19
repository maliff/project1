import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'react-oauth2-code-pkce';

const Callback = () => {
  const { authService } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    authService.handleCallback().then(() => {
      navigate('/');
    });
  }, [authService, navigate]);

  return <div>Loading...</div>;
};

export default Callback;
