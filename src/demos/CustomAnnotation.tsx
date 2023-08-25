import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, Text, Icon , Stack, Button, Wrap, Flex, Heading } from '@chakra-ui/react'
import { WebViewerContext } from '../context/WebViewerContext';

const CustomAnnotation = () => {
    const file = "PDFTRON_about.pdf";
    const { instance } = useContext(WebViewerContext);

    useEffect(() =>{
        if(!instance.Core) return;
        instance.UI.loadDocument(`/files/${file}`);
    },[instance]);

  return (
    <Box>
        <Stack spacing={'5'}>
            <Heading>Custom Annotation</Heading>
            <Text>To utilize a USB device within the browser, you must initially provide your browser with permission to access the said USB device.</Text>
        </Stack>
    </Box>
  );
}

export default CustomAnnotation;