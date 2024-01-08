import * as React from "react"
import { useState, useEffect } from "react";
import {
  Box,
  ChakraProvider,
  Divider,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react"
import Webviewer from "./components/WebViewer"
import { theme } from "./config/theme";
import { Provider } from 'react-redux'
import store from "./store/store";
import { WebViewerInstance } from "@pdftron/webviewer";
import { WebViewerContext } from "./context/WebViewerContext";
import DemoBar from "./components/DemoBar";
import { Header } from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";

export const App = () => {
  const [instance, setInstance] = useState<WebViewerInstance>({} as WebViewerInstance);
  const { pathname } = useLocation();

  return(
    <Flex>
      <Provider store={store}>
      <ChakraProvider theme={theme}>
        <WebViewerContext.Provider value={{ instance, setInstance }}>
          <VStack flex={1} >
            <Header />
            <HStack width={"100%"} alignItems="start" style={{marginTop: 0}}>
              <DemoBar />
              <Webviewer />
              {pathname !== "/" &&
                <Box width={"420px"} style={{marginLeft: 0}}>
                  <Divider />
                  <Box  p="2">
                    <Outlet />
                  </Box>
                </Box>
              }
            </HStack >
          </VStack>
        </WebViewerContext.Provider>
      </ChakraProvider>
      </Provider>
    </Flex>
  );
};
