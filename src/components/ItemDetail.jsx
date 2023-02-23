    import {
        Center,
        Card,
        CardBody,
        Image,
        Stack,
        Heading,
        Text,
        Button,
        CardFooter,
        Divider,
        Alert,
    } from "@chakra-ui/react";
    import { useParams } from "react-router-dom";
    import ItemCount from "./ItemCount";
    
    const ItemDetail = ({ cubiertas }) => {
        const { id } = useParams();
        // console.log(id);
    
        const cubiertaFilter = cubiertas.filter((cubierta) => cubierta.id == id);

            return (
            <>
                {cubiertaFilter.map((cubierta) => (
                <div key={cubierta.id}>
                    <Center p="1rem">
                    <Card className="card-main">
                        <CardBody>
                        <Image borderRadius="md" src={cubierta.imagen} />
                        <Stack mt="6" spacing="3">
                            <Heading size="md">{cubierta.modelo}</Heading>
                            <Text color="blue.800" fontSize="l">
                            Description: {cubierta.descripcion}
                            </Text>
                            <Text color="blue.800" fontSize="l">
                            Categoria: {cubierta.tipo}
                            </Text>
                            <Text color="red.600" fontSize="xl">
                            Medida: {cubierta.medida}
                            </Text>
                            <Text color="green.600" fontSize="xl">
                            Price: $ {cubierta.precio}
                            </Text>
                        </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter className="card-footer">
                        <ItemCount
                            stock={cubierta.stock}
                            id={cubierta.id}
                            price={cubierta.precio}
                            name={cubierta.modelo}
                        />
                        </CardFooter>
                    </Card>
                    </Center>
                </div>
                ))}
            </>
            );
        };
        
        export default ItemDetail;