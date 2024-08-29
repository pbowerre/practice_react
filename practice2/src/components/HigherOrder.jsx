import { useState } from "react";

const HigherOrder = (Component) => {
  const AuthComponent = (props) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    if (isAuthenticated) {
      return (
        <>
          <Component {...props} />
          <button onClick={() => setAuthenticated(false)}>Log out</button>
        </>
      );
    } else {
      return (
        <>
          <p>Please Login</p>
          <button onClick={() => setAuthenticated(true)}>Login</button>
        </>
      );
    }
  };

  return AuthComponent;
};

export default HigherOrder;
