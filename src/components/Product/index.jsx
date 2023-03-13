import { useDispatch } from 'react-redux';
import { API_URI } from '../../utils/const';
import styles from './product.module.css';
import { addProduct } from '../../store/orderSlice';


const Product = ({ item }) => {
    const dispatch = useDispatch();
    
    return (
        <article className={styles.product}>
            <img src={`${API_URI}${item.image}`} alt={item.title} className={styles.image} />

            <p className={styles.price}>{item.price}<span className="currency">&nbsp;₽</span></p>

            <h3 className={styles.title}>
                <button className={styles.detail}>{item.title}</button>
            </h3>

            <p className={styles.weight}>{item.weight}</p>

            <button 
            className={styles.add} 
            onClick={() => {dispatch(addProduct({id: item.id}))}}
            type="button">Добавить</button>
        </article>
    )
}

export default Product
