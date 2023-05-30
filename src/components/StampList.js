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
          <li key="checkbox-01"></li>
          <li key="img-02">Image</li>
          <li key="name-03">Name</li>
          <li key="park-04">Park</li>
          <li key="location-05">Location</li>
          <li key="dateAquired-06">Date Aquired</li>
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
