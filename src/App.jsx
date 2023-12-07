function App() {
  const title = "React";
  const list = [
    {
      id: 0,
      title: "React",
      url: "https://reactjs.org",
      author: "Reza ahmadi",
      num_comments: 3,
      points: 4,
    },
    {
      id: 1,
      title: "React",
      url: "https://redux.js.org",
      author: "Mohammda ",
      num_comments: 2,
      points: 5,
    },
  ];
  return (
    <div>
      <h1>Hello React{title}</h1>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" />
    </div>
  );
}

export default App;
