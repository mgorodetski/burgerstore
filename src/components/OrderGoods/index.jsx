import { API_URI } from "../../utils/const";
import Count from "../Count"
import styles from './orderGoods.module.css';

export const OrderGoods = ({ title, price, image, count, id, weight }) => {
    return (

        <li className={styles.item}>
            <img className={styles.image} src={`${API_URI}${image}`} alt={title} />

            <div className={styles.goods}>
                <h3 className={styles.title}>{title}</h3>

                <p className={styles.weight}>{weight}&nbsp;г.</p>

                <p className={styles.price}>{price}
                    <span className={styles.currency}>&nbsp;₽</span>
                </p>
            </div>
            <Count count={count} id={id}/>
        </li>
    )
}
