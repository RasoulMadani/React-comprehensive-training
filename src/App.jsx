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
function App() {
  return (
    <div>
      <h1>Hello React{title}</h1>
      <Search/>
      <List />
    </div>
  );
}
function List() {
  return (
    <ul>
      {list.map(function (item, index) {
        return (
          <li key={index}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li>
        );
      })}
    </ul>
  );
}
function Search() {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" />
    </div>
  );
}
export default App;
