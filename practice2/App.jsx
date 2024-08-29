import "./src/styles/App.css";
import Button from "./src/components/button";
import HigherOrder from "./src/components/HigherOrder";


function App() {
  const Auth = HigherOrder(Button);
  return (
    <>
      <Auth />
    </>
  );
}

export default App;
