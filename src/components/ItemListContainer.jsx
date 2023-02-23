import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
const ItemListContainer = () => {
  const { tipo } = useParams();


  const catFilter = Data.filter((cubierta) => cubierta.tipo === tipo);
  return (
    <div>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Tipos de Neumaticos
        </Heading>
      </Center>
      {tipo ? <ItemList cubiertas={catFilter} /> : <ItemList cubiertas={Data} />}
    </div>
  );
};

export default ItemListContainer;
