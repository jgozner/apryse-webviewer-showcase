import * as React from "react"
import { useState, useEffect } from "react";
import {
  ChakraProvider,
  Flex,
  VStack,
} from "@chakra-ui/react"
import Webviewer from "./components/WebViewer"
import { theme } from "./theme";
import { Provider } from 'react-redux'
import store from "./store/store";
import { WebViewerInstance } from "@pdftron/webviewer";
import { WebViewerContext } from "./context/WebViewerContext";
import DemoBar from "./components/DemoBar";
import SearchBar from "./components/SearchBar";
import { FilePicker } from "./components/FilePicker";

export const App = () => {
  const [instance, setInstance] = useState<WebViewerInstance>({} as WebViewerInstance);

  return(
    <Flex>
      <Provider store={store}>
      <ChakraProvider theme={theme}>
        <WebViewerContext.Provider value={{ instance, setInstance }}>
          <VStack width={"280px"}>
            <FilePicker />
            <SearchBar />
          </VStack>
          <Webviewer />
          <DemoBar />
        </WebViewerContext.Provider>
      </ChakraProvider>
      </Provider>
    </Flex>
  );
};
