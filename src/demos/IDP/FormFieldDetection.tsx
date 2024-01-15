import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, Text, Icon , Stack, Button, Wrap, Flex, Heading, Divider, UnorderedList, ListItem } from '@chakra-ui/react'
import { WebViewerContext } from '../../context/WebViewerContext';

const FormFieldDetection = () => {
    const file = "PDFTRON_about.pdf";
    const { instance } = useContext(WebViewerContext);

    useEffect(() =>{
        if(!instance.Core) return;
        instance.UI.loadDocument(`/files/${file}`);
    },[instance]);

  return (
    <Box>
        <Stack spacing={'5'} mt="2">
            <Heading>Form Field Detection</Heading>
            <Divider />
            <Text>A demo of Apryse.AI which uses custom built AI models to detect and classify form fields accurately. Easily perform text and form field classifications using JavaScript in browser or app.</Text>
            <Divider />
        </Stack>
    </Box>
  );
}

export default FormFieldDetection;