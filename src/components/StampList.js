import Stamp from "./Stamp";

function StampList({ stamps }) {
  return (
    <div class="stamp-list-component">
      <h3>StampList Component</h3>
      <section className="stamp-list-wrapper">
        <ul class="title-row">
          <li key="checkbox-01"></li>
          <li key="img-02">Image</li>
          <li key="name-03">Name</li>
          <li key="park-04">Park</li>
          <li key="location-05">Location</li>
          <li key="dateAquired-06">Date Aquired</li>
        </ul>
        {stamps.map((stamp, index) => (
          <Stamp key={index} stamp={stamp} />
        ))}
      </section>
    </div>
  );
}

export default StampList;
