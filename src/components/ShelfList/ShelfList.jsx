import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShelfItem from "../ShelfItem/ShelfItem";

function ShelfList() {
  const dispatch = useDispatch();
  const shelf = useSelector((store) => store.shelf);

  useEffect(() => {
    dispatch({ type: "GET_ALL" });
  }, []);

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
