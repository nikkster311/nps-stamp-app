function Stamp({ stamp }) {
  return (
    <ul key={stamp.id + "-wrapper"}>
      <li>
        <input type="checkbox" label="aquired" />
        {stamp.aquired ? true : false}
      </li>
      <li>{stamp.img}</li>
      <li>{stamp.name}</li>
      <li>{stamp.park}</li>
      <li>{stamp.location}</li>
      <li>{stamp.dateAquired}</li>
    </ul>
  );
}

export default Stamp;
