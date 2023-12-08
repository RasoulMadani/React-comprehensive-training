import List from "./components/list";
import Search from "./components/search";
import { useEffect, useState } from "react";
import useStorageState from "./hooks/useStorageState";
const welcome = {
  greeting: "Hi",
  title: "React",
};

const App = () => {
  console.log("app");
  const stories = [
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
      title: "Redux",
      url: "https://redux.js.org",
      author: "Mohammad kia",
      num_comments: 2,
      points: 5,
    },
  ];

  const [searchTerm, setSearchTerm] = useStorageState('search', '');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
   
  };


  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <List list={searchedStories} />
    </div>
  );
};

export default App;
