const App = () => {
  return (
    <div>
      <Person
        name="Bob Bobson"
        hobbies={["jogging", "dancing", "writing"]}
        age={20}
      />
      <Person
        name="Ted Tedson"
        hobbies={["griping", "sighing", "moping"]}
        age={17}
      />
      <Person name="Joe" hobbies={["doing nothing"]} age={99} />
    </div>
  );
};
