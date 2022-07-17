import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(prevToggle => !prevToggle);
  }

  return (
    <div className="App">
      <Header toggle={toggle} handleClick={handleClick} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
