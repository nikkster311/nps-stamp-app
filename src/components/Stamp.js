function Stamp({ stamp }) {
  return (
    <ul key={stamp.id + "-wrapper"}>
      <li>
        <input type="checkbox" label="aquired" />
        {stamp.aquired ? true : false}
      </li>
      <li>{stamp.img}</li>
      <li>{stamp.label}</li>
      <li>
        <a href={stamp.parks[0].url} target="_blank">
          {stamp.parks[0].fullName}
        </a>
      </li>
      <li>{stamp.parks[0].states}</li>
      <li>{stamp.dateAquired}</li>
    </ul>
  );
}

export default Stamp;
