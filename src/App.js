import React, { useEffect, useState } from "react";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Loding from "./components/Loding";
import Home from "./Home";

const App = () => {
  const [loding, setLoding] = useState(true);
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loding ? (
        <div>
          <Loding />
        </div>
      ) : (
        <div>
          <Home />
        </div>
      )}
    </div>
  );
};

export default App;
