import { useContext } from "react";
import { WebViewerContext } from "../../context/WebViewerContext";
import { useFilePicker } from "use-file-picker";
import { Box, Button, Center, Divider, Flex, Image } from "@chakra-ui/react";

export const FilePicker = () => {
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
        <Box w={"100%"}>
            <Center py="5">
                <Image w="120px" src="https://showcase.apryse.com/assets/icons/apryse-logo.svg"/>
            </Center>
            <Divider />
            <Box m={2} >
                <Button 
                    onClick={() => openFileSelector()}
                    w="100%" 
                    variant="secondary" >Choose File </Button>
            </Box>
            <Divider/>
        </Box>
    )
}