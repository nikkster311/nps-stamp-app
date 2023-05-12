import IndexPage from "./components/IndexPage.js";
import { react, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [stamps, setStamps] = useState([]);

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
      <IndexPage stamps={stamps} />
    </>
  );
}

export default App;
