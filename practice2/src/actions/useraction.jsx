
export const HandleClick = ({text}) => {
  const click = () => {
    alert("You clicked me");
  };

  return <button onClick={click}>{text}</button>;
};

// HOC - Higher Order Component