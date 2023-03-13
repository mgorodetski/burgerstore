import { Container } from "../Container";
import Order from "../Order";
import styles from './catalog.module.css';
import Product from "../Product";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productRequestAsync } from "../../store/productSlice";

export const Catalog = () => {
    const { products } = useSelector(state => state.product);
    const dispatch = useDispatch();
    const { category, activeCategory } = useSelector(state => state.category);

    useEffect(() => {
        if(category.length) {
            dispatch(productRequestAsync(category[activeCategory]?.title));
        }
    }, [category, activeCategory]);

    return (
        <section className="catalog">
            <Container className={styles.container}>
                <Order />
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>{category[activeCategory]?.rus}</h2>
                    <div className={styles.wrap_list}>
                        <ul className={styles.list}>
                            {products.length ? products.map((item) => (
                                <li className={styles.item} key={item.id}>
                                    <Product item={item} />
                                </li>
                            )) : <h3>К сожалению товаров данной категории нет</h3>}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}
