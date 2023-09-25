import React, { useEffect, useState } from 'react';
import {
  Box, VStack, Collapse, Text, useDisclosure, HStack, IconButton, Divider, Heading, Stack
} from '@chakra-ui/react';
import { Outlet, useLocation } from "react-router-dom";
import FilePicker from "../FilePicker";
import SearchBar from "../SearchBar";
const DemoBar = () => {
  const { pathname } = useLocation();

  return (
    <Box w={"300px"} style={{ marginTop: 0}}>
        <Divider />
        <Box minH="100vh">
            <VStack my="2" mx="3">
              <FilePicker />
              <SearchBar />
            </VStack>
        </Box>
    </Box>
  );
}


export default DemoBar;