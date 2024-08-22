import { HandleClick } from "../actions/useraction";

const Button = () => {
  const text = "Add a Post";
  return (
    <div>
      <HandleClick text={text} />
    </div>
  );
};

export default Button;