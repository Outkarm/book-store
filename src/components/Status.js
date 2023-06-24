import { useDispatch, useSelector } from 'react-redux';
import { statusCheck } from '../redux/categories/categories';
import '../styles/App.css';

const Categories = () => {
  const theDispatch = useDispatch();
  const message = useSelector((state) => state.categories.message);

  const handleStatusCheck = () => {
    theDispatch(statusCheck());
  };

  return (
    <div className="cp">
      <span>{message}</span>
      <br />
      <button
        type="button"
        className="construction"
        onClick={handleStatusCheck}
      >
        Check status
      </button>
    </div>
  );
};

export default Categories;
