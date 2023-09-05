import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, Text, Icon , Stack, Button, Wrap, Flex, Heading } from '@chakra-ui/react'
import { WebViewerContext } from '../context/WebViewerContext';
import { Core } from '@pdftron/webviewer';

const CustomZoomTool = () => {
    const file = "PDFTRON_about.pdf";
    const { instance } = useContext(WebViewerContext);

    const getMouseLocation = (e: any) => {
        const scrollElement = instance.Core.documentViewer.getScrollViewElement();
        const scrollLeft = scrollElement.scrollLeft || 0;
        const scrollTop = scrollElement.scrollTop || 0;

        return {
            x: e.pageX + scrollLeft,
            y: e.pageY + scrollTop
        };
    }

    const getPageLocation = (documentViewer: any, mouseLocation: any) =>{
        const displayMode = documentViewer.getDisplayModeManager().getDisplayMode();
        // takes a start and end point but we just want to see where a single point is located
        const page = displayMode.getSelectedPages(
            mouseLocation,
            mouseLocation
        );
        const clickedPage = page.first !== null ? page.first : documentViewer.getCurrentPage();

        const pageCoordinates = displayMode.windowToPage(
          mouseLocation,
          clickedPage
        );

        return pageCoordinates;
    }
    

    useEffect(() =>{
        if(!instance.Core) return;
        instance.UI.loadDocument(`/files/${file}`);

        const { documentViewer } = instance.Core;

        const customZoomToolName = 'CustomZoom';
        const customZoomTool = new instance.Core.Tools.Tool(documentViewer);

        customZoomTool.cursor = "zoom-in";
        customZoomTool.mouseLeftUp = (e) => {
            const mouseLocation = getMouseLocation(e);
            const pageLocation = getPageLocation(documentViewer, mouseLocation)
            
            console.log(mouseLocation);
            console.log(pageLocation);
        }

        instance.UI.registerTool({
            toolName: customZoomToolName,
            toolObject: customZoomTool,
            buttonImage:'<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 11.381 14.4415 12.6296 13.5355 13.5355C12.6296 14.4415 11.381 15 10 15C7.23858 15 5 12.7614 5 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.5719 17 13.0239 16.481 14.1921 15.6063L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L15.6063 14.1921C16.481 13.0239 17 11.5719 17 10C17 6.13401 13.866 3 10 3ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V9H8C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11H9V12C9 12.5523 9.44772 13 10 13C10.5523 13 11 12.5523 11 12V11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9H11V8Z"/></svg>',
            buttonName: 'customZoomToolButton',
            tooltip: 'Cuztom Zoom',
        });

        instance.UI.setHeaderItems((header) => {
            var customZoomButton = {
                type: 'toolButton',
                toolName: customZoomToolName,
                dataElement: 'customZoomToolButton'
            };
            let items = header.getItems();
            items.splice(6, 0, customZoomButton);
            header.update(items);
        });

    
        return () => {
            instance.UI.setHeaderItems((header) => {
                header.delete('customZoomToolButton')
            })
        }

    },[instance]);

  return (
    <Box>
        <Stack spacing={'5'}>
            <Heading>Custom Annotation</Heading>
            <Text>To utilize a USB device within the browser, you must initially provide your browser with permission to access the said USB device.</Text>
        </Stack>
    </Box>
  );
}

export default CustomZoomTool;