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
        <Stack spacing={'5'}>
            <Heading>Form Field Detection</Heading>
            <Divider />
            <Text>Edit DOCX files directly in your browser without server-side dependencies or MS Office installations, thanks to WebViewer's seamless MS Office file editing capabilities.</Text>
            <Divider />
        </Stack>
    </Box>
  );
}

export default FormFieldDetection;