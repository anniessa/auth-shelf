import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
    Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Input,
} from "@mui/material";

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
    <Card sx={{ maxWidth: 240, ml: "10px", mr: "10px", mt: "5px", mb: "5px" }}>
      {isEditing ? (
        <>
          <CardMedia
            sx={{
              height: 240,
              width: 240,
            }}
            component="img"
            src={item.image_url}
          />
          <CardContent>
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
              <Input type="submit" value="Submit" />
              <Button color="secondary" onClick={handleEdit}>
                Cancel
              </Button>
            </form>
          </CardContent>
        </>
      ) : (
        <>
          <CardMedia
            sx={{
              height: 240,
              width: 240,
            }}
            component="img"
            src={item.image_url}
          />
          <CardContent>
            <Typography>{item.description}</Typography>
            {item.user_id == user.id ? (
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={handleClick}
              >
                Delete
              </Button>
            ) : (
              ""
            )}
            {item.user_id == user.id ? (
              <Button variant="outlined" size="small" color="secondary" onClick={handleEdit}>
                Edit
              </Button>
            ) : (
              ""
            )}
          </CardContent>
        </>
      )}
    </Card>
  );
}

export default ShelfItem;
