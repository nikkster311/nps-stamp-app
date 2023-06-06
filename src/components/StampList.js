import { useEffect, useState } from "react";
import Stamp from "./Stamp";

function StampList({ stamps, type }) {
  const defaultIndex = -1;
  const [selectedStamp, setSelectedStamp] = useState(defaultIndex);

  function CloseStamp() {
    setSelectedStamp(-1);
  }

  return (
    <div className="stamp-list-component">
      <h3>StampList Component</h3>
      {/* close button to close out stamp only shows when a stamp is clicked on and being viewed */}
      <button
        className={selectedStamp === -1 ? "close-btn hide" : "close-btn show"}
        onClick={() => CloseStamp()}
      >
        X
      </button>
      <section className={`stamp-` + type + `-wrapper`}>
        <ul key="title-row" className="title-row">
          <li></li>
          <li>Image</li>
          <li>Name</li>
          <li>Park</li>
          <li>Location</li>
          <li>Date Aquired</li>
        </ul>
        {stamps.map((stamp, index) => (
          <div
            key={index}
            className={selectedStamp === index ? "stamp-active" : ""}
            onClick={() => {
              setSelectedStamp(index);
            }}
          >
            <Stamp key={index} stamp={stamp} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default StampList;
