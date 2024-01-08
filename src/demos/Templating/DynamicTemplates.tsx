import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, Text, Icon , Stack, Button, Wrap, Flex, Heading, Divider, UnorderedList, ListItem } from '@chakra-ui/react'
import { WebViewerContext } from '../../context/WebViewerContext';

const DynamicTemplates = () => {
    const file = "legal-contract.docx";
    const { instance } = useContext(WebViewerContext);

    useEffect(() =>{
        if(!instance.Core) return;
        instance.UI.loadDocument(`/files/${file}`,
        {
            filename:file,
            enableOfficeEditing: true,
        });
    },[instance]);

  return (
    <Box>
        <Stack spacing={'5'}>
            <Heading>Templates</Heading>
            <Divider />
            <Text></Text>
            <Divider />
        </Stack>
    </Box>
  );
}

export default DynamicTemplates;