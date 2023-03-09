import React from 'react';
import ShelfList from '../ShelfList/ShelfList';
function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfList />
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
