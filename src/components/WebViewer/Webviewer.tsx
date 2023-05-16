import React, { useEffect, useRef, useContext, useCallback } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer';
import { useAppDispatch } from '../../store/hooks';
import { setInitialized } from '../../store/slices/webviewerSlice';
import { WebViewerContext } from '../../context/WebViewerContext';

const WebViewerWrap = () => {
    const { setInstance }  = useContext(WebViewerContext);
    const dispatch = useAppDispatch();

    const webviewerRef = useCallback((viewer: HTMLDivElement) => {
        WebViewer({
            path: `/webviewer`,
            initialDoc: '/files/PDFTRON_about.pdf',
            fullAPI: true,
            disabledElements: ['zoomOverlayButton']
        },
            viewer
        ).then(async (instance: WebViewerInstance) => { 
          if(instance){
            setInstance?.(instance)
            dispatch(setInitialized(true));
          }
        });
    }, []);

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