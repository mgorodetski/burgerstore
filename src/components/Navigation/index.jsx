import styles from './navigation.module.css';
import { Container } from '../Container'
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { categoryRequestAsync, changeCategory } from '../../store/categorySlice';
import { useEffect } from 'react';
import { API_URI } from '../../utils/const';

export const Navigation = () => {
    const { category, activeCategory } = useSelector((state) => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoryRequestAsync());
    }, []);

    return (
        <nav className={styles.navigation}>
            <Container className={styles.container}>
                <ul className={styles.list}>
                    {category.map((item, index) =>
                        <li className={styles.item} key={item.title}>
                            <button className={classNames(
                                styles.button,
                                activeCategory === index ? styles.button_active : '')}
                                style={{ backgroundImage: `url(${API_URI}${item.image})` }}
                                onClick={() => {
                                    dispatch(changeCategory({ indexCategory: index }))
                                }}>
                                {item.rus}
                            </button>
                        </li>
                    )}
                </ul>
            </Container>
        </nav>
    )
}
