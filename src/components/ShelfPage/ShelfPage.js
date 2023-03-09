import React from 'react';
import ShelfList from '../ShelfList/ShelfList';
import ShelfForm from '../ShelfForm/ShelfForm';

import { useSelector } from 'react-redux';

function ShelfPage() {

  const user = useSelector(store => store.user)


  return (
    <div className="container">
      <h2>Shelf</h2>
      {user.id ?
        <ShelfForm />
        : ''}
      <ShelfList />
    </div>
  );
}

export default ShelfPage;
