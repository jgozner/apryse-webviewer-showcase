import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, Text, Icon , Stack, Button, Wrap, Flex, Heading, Divider } from '@chakra-ui/react'
import { Core } from '@pdftron/webviewer';
import { WebViewerContext } from '../context/WebViewerContext';
import { getSelectedCert, getUSBDevices, signPDFHash } from '../utils/SignerDigital';

const HSM = () => {
    const file = "digital_signature.pdf";
    const { instance } = useContext(WebViewerContext);
    const [selectedDevice, setSelectedDevice] = useState();

    useEffect(() =>{
        if(!instance.Core) return;
        instance.UI.loadDocument(`/files/${file}`);
    },[instance]);

    const getUSBCert = async() =>{ 
        try{
            /* use WebAPI usb see: https://developer.mozilla.org/en-US/docs/Web/API/USB
            navigator.usb.requestDevice({filters:[]}).then(function(device){
                console.log(device);
            });
            */
            await getUSBDevices();
           
        }catch(err){

        }
    }

    const signWithWindowsCert = async() =>{ 
        const { documentViewer, PDFNet } = instance.Core;
        const { PDFDoc,  SDFDoc, X509Certificate, DigitalSignatureField, DigestAlgorithm, ObjectIdentifier, TimestampingConfiguration, VerificationOptions } = PDFNet;
        
        //const cert = await getSelectedCert();
        class CustomSignatureHandler extends instance.Core.PDFNet.SignatureHandler{
            
            getName(): Promise<string> {
                console.log("get name")
                return new Promise((resolve) => {
                    resolve("custom")
                })
            }

            reset(): Promise<boolean> {
                console.log("reset")
                return new Promise((resolve) => {
                    resolve(true) 
                })
            }

            destructor(): Promise<void> {
                console.log("destructor")
                return new Promise(() => {});
            }

            appendData(data: any): Promise<void>{
                console.log("appendData")
                console.log(data)
                return new Promise(() => {});
            }

            createSignature(): Promise<any>{
                console.log("createSignature")
                return new Promise((resolve) => {resolve("test")});
            }
        }

        const signatureHandler = new CustomSignatureHandler();
/*
        console.log(cert)
        var uint8array = new TextEncoder().encode(`-----BEGIN CERTIFICATE----- ${cert?.Cert} -----END CERTIFICATE-----`);
        const signerCert = await X509Certificate.createFromBuffer(uint8array.buffer);
        console.log(signerCert)
        const signedHash = await signPDFHash("8743b52063cd84097a65d1633f5c74f5", cert?.CertThumbPrint);
        console.log(signedHash)
        */
        
        const document = await documentViewer.getDocument().getPDFDoc();
        const sigHandlerId = await document.addSignatureHandler(signatureHandler);
        //const sigHandlerId = await document.addStdSignatureHandlerFromBuffer(uint8array.buffer, 'password');
        
        const signature_field = await document.getField("SignatureFormField 1");
        const digital_signature_field = await DigitalSignatureField.createFromField(signature_field);

        await digital_signature_field.signOnNextSaveWithCustomHandler(sigHandlerId)
        const buf = await document.saveMemoryBuffer(0);
        const blob = new Blob([buf], { type: 'application/pdf' });

        //instance.UI.loadDocument(blob);
        
    }

  return (
    <Box>
        <Stack spacing={'3'}>
            <Heading>HSM Signing</Heading>
            <Divider />
            <Text>To utilize a USB device within the browser, you must initially provide your browser with permission to access the said USB device.</Text>
            <Divider />
            <Button onClick={getUSBCert}>Sign USB Cert</Button>
            <Button onClick={signWithWindowsCert}>Sign Windows Certificate</Button>
        </Stack>
    </Box>
  );
}

export default HSM;