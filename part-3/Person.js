const Person = (props) => {
  return (
    <div>
      <h2>{shortenName(props.name)}</h2>
      <p>Learn more about {props.name}</p>
      <h3>{props.age >= 18 ? "Go vote!" : "You must be 18"}</h3>
      <h3>Hobbies</h3>
      <ul>
        {props.hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

function shortenName(name) {
  return name.length > 8 ? name.slice(0, 6) + "..." : name;
}
