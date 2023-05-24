"use client";

import { Container, Toolbar } from "@mui/material";

import ShopList from "@/components/ShopList/ShopList";


const Shop = () => {
  return (
    <Container>
      <Toolbar />
      <h2>Shop</h2>
      <ShopList />
    </Container>
  );
};

export default Shop;
