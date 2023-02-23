import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ cubiertas }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {cubiertas?.map((cubierta) => (
          <Item key={cubierta.id} {...cubierta}/> 
        ))}
      </Container>
    </>
  );
};

export default ItemList;