import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusCheck } from '../redux/categories/categories';

function Category() {
  const categoryInfo = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(statusCheck());
  };

  return (
    <div>
      <button type="submit" onClick={onButtonClick}>
        Check Status
      </button>
      <h2>{categoryInfo.categories[0]}</h2>
    </div>
  );
}
export { Category as default };
