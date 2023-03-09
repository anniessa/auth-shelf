import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';

function ShelfItem({ item }) {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);


  const [description, setDescription] = useState(item.description);
  const [imageUrl, setImageUrl] = useState(item.image_url);

  const [isEditing, setEditing] = useState(false);

  const handleClick = () => {
    dispatch({ type: "DELETE_ITEM_BY_ID", payload: item.id });
  };

  const handleEdit = () => {
    setEditing(!isEditing);
  }

  const handleEditSubmit = (event) => {
    event.preventDefault;
    dispatch({
      type: "EDIT_ITEM",
      payload: {
        description: description,
        image_url: imageUrl,
        id: item.id
      }
    });
    setEditing(!isEditing);
  }

  return (
    <div>

      {isEditing ?
        <form onSubmit={handleEditSubmit}>
          <input
            placeholder="Image Url"
            value={imageUrl}
            onChange={e => { setImageUrl(e.target.value) }}
          />
          <input
            placeholder="Description"
            value={description}
            onChange={e => { setDescription(e.target.value) }} />
          <input
            type="submit"
            value="submit" />

        </form> :
        <>
          <img src={item.image_url} />
          <p>{item.description}</p>
          {item.user_id == user.id ? <button onClick={handleClick}>Delete</button> : ''}
          {item.user_id == user.id ? <button onClick={handleEdit}>Edit</button> : ''}
        </>
      }
    </div>
  );
}

export default ShelfItem;
