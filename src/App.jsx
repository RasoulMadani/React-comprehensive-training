import List from "./components/list";
import Search from "./components/InputWithLabel";
import { useEffect, useState } from "react";
import useStorageState from "./hooks/useStorageState";
import InputWithLabel from "./components/InputWithLabel";
const welcome = {
  greeting: "Hi",
  title: "React",
};

const App = () => {
  const initialStories = [
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

  const [stories, setStories] = useState([]);
  const [searchTerm, setSearchTerm] = useStorageState("search", "");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getAsyncStories = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve({ data: { stories: initialStories } });
        reject();
      }, 2000);
    });

  useEffect(() => {
    setIsLoading(true);
    getAsyncStories().then((result) => {
      setStories(result.data.stories);
      setIsLoading(false);
    }).catch(() => setIsError(true));
  }, []);

  const handleRemoveStory = (id) => {
    const newStories = stories.filter((story) => story.id !== id);
    setStories(newStories);
  };

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
      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch}
        isFocused
      />

    {isError && <p>something went wrong</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <List list={searchedStories} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};

export default App;
