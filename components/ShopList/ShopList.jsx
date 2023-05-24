
// import { List, ListItem } from "@mui/material";

// import getProductsApi from "@api/FakeApi";
// import PizzaItem from "@components/ShopItem/ShopItem";
import styles from "./ShopList.module.css";

const ShopList = () => {
  //   const products = getProductsApi();

  return (
    <>
      <h2>Shop List</h2>
      {/* <List className={styles.list}>
        {products &&
          products.map(({ id, title, description, price, image, quantity }) => {
            return (
              <ListItem key={id} className={styles.item}>
                <PizzaItem
                  id={id}
                  title={title}
                  description={description}
                  price={price}
                  image={image}
                  quantity={quantity}
                />
              </ListItem>
            );
          })}
      </List> */}
    </>
  );
};

export default ShopList;
