import React from "react";
import StampList from "./StampList";

function IndexPage({ stamps }) {
  // have a way to change this type based on if we need a list or cards or whatever
  // this tells the stamp list component if we cant the list of cards displayed as a list or as cards (or future options)
  var type = "cards";
  return (
    <div className="index-pg">
      <h2>Index Page</h2>
      <StampList stamps={stamps} type={type} />
    </div>
  );
}

export default IndexPage;
