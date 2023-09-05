import React, { useEffect, useRef, useContext, useLayoutEffect } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';
import { useAppDispatch } from '../../store/hooks';
import { setInitialized } from '../../store/slices/webviewerSlice';
import { WebViewerContext } from '../../context/WebViewerContext';

const WebViewerWrap = () => {
    const { setInstance }  = useContext(WebViewerContext);
    const dispatch = useAppDispatch();
    const webviewerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        WebViewer({
            path: `/webviewer`,
            initialDoc: '/files/PDFTRON_about.pdf',
            fullAPI: true,
            licenseKey: "demo:1688745488452:7c640dad0300000000ff98c75e9e3a6477a0d966fddd63ac8543da906b"
        },
        webviewerRef.current as any
        ).then(async (instance: WebViewerInstance) => { 
          if(instance){
            
            setInstance?.(instance)
            dispatch(setInitialized(true));
          }
        });
    }, []);

    useLayoutEffect(() => {
      const getViewerSize = () => {
   
      }

      getViewerSize();

      window.addEventListener("resize", getViewerSize);
  
      return () => {
        window.removeEventListener("resize", getViewerSize);
      };
    }, [])

  return (
    <Flex p="2" flex={1} bg="gray.300">
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