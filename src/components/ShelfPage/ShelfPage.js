import React from 'react';
import ShelfList from '../ShelfList/ShelfList';
import ShelfForm from '../ShelfForm/ShelfForm';

function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfForm />
      <ShelfList />
    </div>
  );
}

export default ShelfPage;
