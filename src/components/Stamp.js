function Stamp({ stamp }) {
  return (
    <>
      <ul>
        <li key={stamp.id + "-01"}>
          <input type="checkbox" label="aquired" />
          {stamp.aquired ? true : false}
        </li>
        <li key={stamp.id + "-02"}>{stamp.img}</li>
        <li key={stamp.id + "-03"}>{stamp.name}</li>
        <li key={stamp.id + "-04"}>{stamp.park}</li>
        <li key={stamp.id + "-05"}>{stamp.location}</li>
        <li key={stamp.id + "-06"}>{stamp.dateAquired}</li>
      </ul>
    </>
  );
}

export default Stamp;
