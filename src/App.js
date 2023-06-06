import StampList from "./components/StampList.js";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [stamps, setStamps] = useState([]);

  // have a way to change this type based on if we need a list or cards or whatever
  // this tells the stamp list component if we cant the list of cards displayed as a list or as cards (or future options)
  var type = "cards";

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/stamps", requestOptions)
      .then((response) => response.json())
      .then((result) => setStamps(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <StampList stamps={stamps} type={type} />
    </>
  );
}

export default App;
