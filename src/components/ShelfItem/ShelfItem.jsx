import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {Button} from '@mui/material';

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
  };
    
    
  const handleEditSubmit = (event) => {
    event.preventDefault;
    dispatch({
      type: "EDIT_ITEM",
      payload: {
        description: description,
        image_url: imageUrl,
        id: item.id,
      },
    });
    setEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <img src={item.image_url} />
          <form onSubmit={handleEditSubmit}>
            <input
              placeholder="Image Url"
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
            <input
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
                <input type="submit" value="Submit" />
                <button onClick={handleEdit}>Cancel</button>
            </form>
        </>
      ) : (
        <>
          <img src={item.image_url} />
          <p>{item.description}</p>
          {item.user_id == user.id ? (
            <button onClick={handleClick}>Delete</button>
          ) : (
            ""
          )}
          {item.user_id == user.id ? (
            <Button onClick={handleEdit}>Edit</Button>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

export default ShelfItem;
