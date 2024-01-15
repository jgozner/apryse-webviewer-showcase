import { useContext } from "react";
import { WebViewerContext } from "../../context/WebViewerContext";
import { useFilePicker } from "use-file-picker";
import { Box, Button, Center, Divider, Flex, HStack, Image, VStack } from "@chakra-ui/react";

const FilePicker = () => {
    const { instance } = useContext(WebViewerContext);

    const [openFileSelector, { filesContent, loading }] = useFilePicker({
      accept: [".pdf"],
      multiple: false,
      onFilesSuccessfulySelected: async ({ plainFiles, filesContent }) => {
        const file = plainFiles[0];
        const arrayBuffer = await file.arrayBuffer()
        const arr = new Uint8Array(arrayBuffer);
        const blob = new Blob([arr], { type: file.type });
        instance.UI.loadDocument(blob, { filename: file.name });
      },
    });

    return (
      <Box mx="3" w="100%" >
        <Button 
            w="100%"
            onClick={() => openFileSelector()}
            colorScheme="blue" >Choose File </Button>
      </Box>
    )
}

export default FilePicker;