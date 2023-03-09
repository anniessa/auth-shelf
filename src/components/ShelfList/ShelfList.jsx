import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShelfItem from "../ShelfItem/ShelfItem";
import { useParams } from "react-router-dom";

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
    <div>
      <ul>
        {shelf.map((item) => (
          <li key={item.id} >
            <ShelfItem item={item} />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShelfList;
