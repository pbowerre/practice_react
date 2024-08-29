const HigherOrder = (Component) => {
  const Authenticated = false;

  const AuthComponent = (props) => {
    if (Authenticated) {
      return <Component {...props} />;
    } else {
      return <h1>Please Login</h1>;
    }
  };
  return AuthComponent;
};

export default HigherOrder;
