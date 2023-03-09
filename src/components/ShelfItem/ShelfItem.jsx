import { useDispatch, useSelector } from "react-redux";

function ShelfItem({ item }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleClick = () => {
    dispatch({ type: "DELETE_ITEM_BY_ID", payload: item.id });
  };

  return (
    <div>
          <img src={item.image_url} />
          <p>{item.description}</p>
      {item.user_id == user.id ? <button onClick={handleClick}>Delete</button> : ''}
    </div>
  );
}

export default ShelfItem;
