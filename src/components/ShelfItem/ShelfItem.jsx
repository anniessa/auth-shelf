import { useDispatch } from "react-redux";

function ShelfItem({ item }) {
    const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'DELETE_ITEM', payload: item.id})
  };
  
  return (
    <div>
      <h3>{item.id}</h3>
      {item.id == user.id ? <button onCLick={handleClick}>Delete</button> : ''}
    </div>
  );
}

export default ShelfItem;
