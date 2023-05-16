import React, { useEffect, useState } from 'react';
import {
  Box, Button, Collapse, Text, useDisclosure
} from '@chakra-ui/react';
import { Outlet, useLocation } from "react-router-dom";

const DemoBar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if(pathname !== "/" && !isOpen){
      setIsOpen(true)
    }
  },[pathname])

  if(pathname === "/"){
    return (<Box></Box>)
  }

  return (
    <Box  w={"350px"} display={isOpen ? "visible" : "none"}>
        <Box 
          minH="100vh" 
          p="3">
          <Outlet />
        </Box>
    </Box>
  );
}


export default DemoBar;