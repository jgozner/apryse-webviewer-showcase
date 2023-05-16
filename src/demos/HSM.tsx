import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, Text, Icon , Stack, Button, Wrap, Flex, Heading } from '@chakra-ui/react'
import { Core } from '@pdftron/webviewer';
import { WebViewerContext } from '../context/WebViewerContext';

const HSM = () => {
    const file = "PDFTRON_about.pdf";
    const { instance } = useContext(WebViewerContext);
    const [selectedDevice, setSelectedDevice] = useState();

    useEffect(() =>{
        if(!instance.Core) return;
        instance.UI.loadDocument(`/files/${file}`);
    },[instance]);

    const requestAccess = () =>{ 
        try{
            navigator.usb.requestDevice({ filters:[] }).then(function(device){
                console.log(device);
            });
        }catch(err){

        }
    }

  return (
    <Box>
        <Stack spacing={'5'}>
            <Heading>HSM</Heading>
            <Text>To utilize a USB device within the browser, you must initially provide your browser with permission to access the said USB device.</Text>
            <Button onClick={requestAccess}>Grant USB Access</Button>
        </Stack>
    </Box>
  );
}

export default HSM;