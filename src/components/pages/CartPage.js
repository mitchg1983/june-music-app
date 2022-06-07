import Layout from "../Layout";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

// const sampleShoppingCart = [
//   {
//     id: "234",
//     title: "Red Drum Set",
//     description: "Red drums description",
//     brand: "Yamaha",
//     price: 59999,
//     image: "https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg",
//   },
// ];

const CartPage = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const AddToCart = () => {
    setShoppingCart([
      {
        id: "234",
        title: "Red Drum Set",
        description: "Red drums description",
        brand: "Yamaha",
        price: 59999,
        image:
          "https://m.media-amazon.com/images/I/61YlBr7OQfS._AC_SL1500_.jpg",
      },
    ]);
  };

  return (
    <Layout>
      <Box width={1} display="flex" flexDirection="column" aignItems="center">
        {" "}
        {shoppingCart.map((cartItem) => {
          {
            console.log(cartItem);
          }
          return (
            <Box>
              <Box>
                <Button>Load Cart</Button>
              </Box>
              <Box key={cartItem.title}>
                {cartItem.title} - {cartItem.price / 100}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Layout>
  );
};

export default CartPage;
