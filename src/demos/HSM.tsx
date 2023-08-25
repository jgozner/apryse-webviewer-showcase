import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, Text, Icon , Stack, Button, Wrap, Flex, Heading, Divider } from '@chakra-ui/react'
import { Core } from '@pdftron/webviewer';
import { WebViewerContext } from '../context/WebViewerContext';
import { getSelectedCert, getUSBDevices, selectUsbDevice } from '../utils/SignerDigital';

const HSM = () => {
    const file = "PDFTRON_about.pdf";
    const { instance } = useContext(WebViewerContext);
    const [selectedDevice, setSelectedDevice] = useState();

    useEffect(() =>{
        if(!instance.Core) return;
        instance.UI.loadDocument(`/files/${file}`);
    },[instance]);

    const getUSBCert = async() =>{ 
        try{

            const devices : any = await getUSBDevices();
            //SignerDigital.getSelectedCertificate(certThumbPrint = "", showExpired = false, keyUsageFilter = 128);
           
        }catch(err){

        }
    }

    const getWindowsCert = async() =>{ 
        try{
            console.log(SignerDigital)
           // const certs = await getSelectedCert();
        }catch(err){

        }
    }

  return (
    <Box>
        <Stack spacing={'3'}>
            <Heading>HSM Signing</Heading>
            <Divider />
            <Text>To utilize a USB device within the browser, you must initially provide your browser with permission to access the said USB device.</Text>
            <Divider />
            <Button onClick={getUSBCert}>Get USB Cert</Button>
            <Button onClick={getWindowsCert}>Get Windows Certificate</Button>
        </Stack>
    </Box>
  );
}

export default HSM;