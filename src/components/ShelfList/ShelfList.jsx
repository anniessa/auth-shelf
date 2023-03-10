import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShelfItem from "../ShelfItem/ShelfItem";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";

import './ShelfList.css'

function ShelfList() {
  const dispatch = useDispatch();
  const shelf = useSelector((store) => store.shelf);
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch({type: "GET_SHELF_BY_ID", payload: id})
    } else {
      dispatch({ type: "GET_ALL" });
    }
  }, [id]);

  return (
    <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {shelf.map((item) => (
            <ShelfItem key={item.id} item={item} />
        ))}
    </Box>
  );
}

export default ShelfList;
