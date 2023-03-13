import { useDispatch } from 'react-redux';
import styles from './count.module.css'
import { addProduct, removeProduct } from '../../store/orderSlice';

const Count = ({ count, id }) => {
  const dispatch = useDispatch();

  const increaseCount = () => {
    dispatch(addProduct({ id }));
  }

  const decreaseCount = () => {
    dispatch(removeProduct({ id }));
  }

  return (
    <div className={styles.count}>
      <button className={styles.minus} onClick={decreaseCount}>-</button>
      <p className={styles.amount}>{count}</p>
      <button className={styles.plus} onClick={increaseCount}>+</button>
    </div>
  )
}

export default Count
