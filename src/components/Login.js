import React, { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    // Load the Google Sign-In API script
    const googleScript = document.createElement('script');
    googleScript.src = 'https://accounts.google.com/gsi/client';
    googleScript.async = true;
    document.body.appendChild(googleScript);

    // Initialize Google Sign-In
    googleScript.onload = () => {
      window.google.accounts.id.initialize({
        client_id: "828716804923-q7v7ap8jee59m8bp61f8soikgm98jpte.apps.googleusercontent.com",
      });
    };

    // Clean up the script on unmount
    return () => {
      document.body.removeChild(googleScript);
    };
  }, []);

  const handleSignIn = () => {
    window.google.accounts.id.prompt();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
      <button onClick={handleGoBack}>Go Back</button>
      {/* Add other login elements as needed */}
    </div>
  );
};

export default Login;