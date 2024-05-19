import React, { useContext } from 'react';
import { AuthContext } from 'react-oauth2-code-pkce';

const Home = () => {
  const { tokenData, token, logIn, logOut, idToken, error } = useContext(AuthContext)


  return (
    <div>
      <h2>Home</h2>
      {token ? (
        <div>
          <h4>Login Information from Access Token (Base64 decoded JWT)</h4>
          <pre
            style={{
              width: '400px',
              margin: '10px',
              padding: '5px',
              border: 'black 2px solid',
              wordBreak: 'break-all',
              whiteSpace: 'break-spaces',
            }}
          >
            {JSON.stringify(tokenData, null, 2)}
          </pre>
          <button onClick={() => logOut()}>Log out</button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Home;
