import { Container, Toolbar } from "@mui/material";

import ShopList from "@components/ShopList/ShopList";
import { StyledBox } from "@styles/styledComponent";

const HomeView = () => {
  return (
    <Container>
      <StyledBox>
        <Toolbar />
        <ShopList />
      </StyledBox>
    </Container>
  );
};

export default HomeView;
