import React from "react";
import StampList from "./StampList";

function IndexPage({ stamps }) {
  return (
    <div className="index-pg">
      <h2>Index Page</h2>
      <StampList stamps={stamps} />
    </div>
  );
}

export default IndexPage;
