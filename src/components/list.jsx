import Item from "./item";
const List = ({list}) => {
    return (
      <ul>
        {list.map(({id, ...item}) => (
          <Item key={id} {...item}/>
        ))}
      </ul>
    );
  };
  export default List;