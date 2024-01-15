import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, Text, Icon , Stack, Button, Wrap, Flex, Heading, Divider, UnorderedList, ListItem } from '@chakra-ui/react'
import { WebViewerContext } from '../../context/WebViewerContext';

const TableExtraction = () => {
  const file = "PDFTRON_about.pdf";
  const { instance } = useContext(WebViewerContext);

  useEffect(() =>{
      if(!instance.Core) return;
      instance.UI.loadDocument(`/files/${file}`);
  },[instance]);

  const extractTables = () => {
    
  }

  return (
    <Box>
        <Stack spacing={'5'} mt="2">
            <Heading>Table Detection</Heading>
            <Divider />
            <Text>A demo of Apryse.AI which uses our custom built AI models to extract complex tables accurately and output the data in multiple formats. Use JavaScript to detect and extract data from tables in PDF documents and images.</Text>
            <Divider />
            <Button onClick={extractTables}>Extract Tables</Button>
        </Stack>
    </Box>
  );
}

export default TableExtraction;