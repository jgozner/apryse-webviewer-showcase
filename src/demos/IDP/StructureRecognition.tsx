import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, Text, Icon , Stack, Button, Wrap, Flex, Heading, Divider, UnorderedList, ListItem } from '@chakra-ui/react'
import { WebViewerContext } from '../../context/WebViewerContext';

const DocumentStructureRecognition = () => {
    const file = "PDFTRON_about.pdf";
    const { instance } = useContext(WebViewerContext);

    useEffect(() =>{
        if(!instance.Core) return;
        instance.UI.loadDocument(`/files/${file}`);
    },[instance]);

  return (
    <Box>
        <Stack spacing={'5'} mt="2">
            <Heading>Document Structure</Heading>
            <Divider />
            <Text></Text>
            <Divider />
        </Stack>
    </Box>
  );
}

export default DocumentStructureRecognition;