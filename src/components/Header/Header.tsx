import { Box, Button, Center, Divider, Flex, HStack, IconButton, Image, Spacer, VStack, useDisclosure } from "@chakra-ui/react";
import FilePicker from "../FilePicker";
import { BsFillGridFill } from 'react-icons/bs'
import SearchBar from "../SearchBar";

export const Header = () => {
   
    return (
        <HStack w={"100%"} px={3} py={2}>
            <Center ml="55">
                <Image w="160px" src="https://showcase.apryse.com/assets/icons/apryse-logo.svg"/>
            </Center>
        </HStack>
    )
}