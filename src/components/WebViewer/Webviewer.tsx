import React, { useEffect, useRef, useContext } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';
import { useAppDispatch } from '../../store/hooks';
import { WebViewerContext } from '../../context/WebViewerContext';
import { wvDocumentLoaded } from '../../store/slices/webviewerSlice';

const WebViewerWrap = () => {
    const dispatch = useAppDispatch();
    const webviewerRef = useRef<HTMLDivElement>(null);
    const { setInstance }  = useContext(WebViewerContext);

    useEffect(() => {
        WebViewer({
            path: `/webviewer`,
            initialDoc: '/files/PDFTRON_about.pdf',
            fullAPI: true,
            licenseKey: "demo:1688745488452:7c640dad0300000000ff98c75e9e3a6477a0d966fddd63ac8543da906b",
        },
        webviewerRef.current as any
        ).then(async (instance: WebViewerInstance) => { 
          if(instance){
            const { documentViewer } = instance.Core;

            setInstance?.(instance);

            documentViewer.addEventListener('documentLoaded', () => {
              dispatch(wvDocumentLoaded(documentViewer.getDocument()));
            });
          }
        });
    }, []);

  return (
    <Flex p="2" flex={1} bg="gray.300" style={{ marginLeft: 0}}>
        <Box 
          border="1px solid"
          borderColor="gray.300"
          borderRadius='8px' 
          w='100%' 
          h='100vh' 
          ref={webviewerRef}></Box>
    </Flex>
  );
};

export default WebViewerWrap;