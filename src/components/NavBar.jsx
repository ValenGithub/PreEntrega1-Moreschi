import React from 'react'
import CartWidget from "./CartWidget";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Container } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';



const NavBar = () => {
    return (
<>
    <Container >
        <Flex >
            <Box>
                <img src="./src/assets/M2.png" alt="logo" />
                <Heading size="md" >Moreschi Neumaticos</Heading>
            </Box>
            <Spacer/>
            <Box color={'grey'}>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Selecciona Neumatico
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Autos</MenuItem>
                        <MenuItem>Camioneta</MenuItem>
                        <MenuItem>Camion</MenuItem>
                        <MenuItem>Moto</MenuItem>
                    </MenuList>
                    
                </Menu>
            </Box>
            
            <Box>
                <CartWidget/>
            </Box>
        </Flex>
    </Container>
</>
    )
    }

export default NavBar
