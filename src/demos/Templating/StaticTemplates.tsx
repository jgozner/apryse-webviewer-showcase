import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, Text, Icon , Stack, Button, Wrap, Flex, Heading, Divider, UnorderedList, ListItem, HStack, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { WebViewerContext } from '../../context/WebViewerContext';
import { useForm } from 'react-hook-form';


const StaticTemplates = () => {
    const file = "static-template.docx";
    const { control, register, getValues } = useForm({
        defaultValues: {
            dest_street_address: '187 Duizelstraat',
            applicant_first_name: 'Janice N.',
            applicant_surname: 'Symonds' ,
            Date: '01/06/2022',
            sender_name: 'Arnold Smith',
            company_name: 'React-Faux',
            logo: 'data:image/png;base64,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',
        }
    });
    const { instance } = useContext(WebViewerContext);
    const [keys, setKeys] = useState<string[]>([]);

    const grabDocumentKeys = async () => {
        const { documentViewer } = instance.Core;

        const doc = documentViewer.getDocument();

		const keys = await doc.getTemplateKeys("flat") as string[];
        setKeys(keys);
    }

    const fillTemplate = async () => {
        const { documentViewer, Search, PDFNet } = instance.Core;

        await PDFNet.initialize();

        const values = getValues();
        const formattedValues = {} as Record<string, any>;

        for(const [key, value] of Object.entries(values)){
            if(value.includes("data:image")){
                formattedValues[key] = { image_url: value, width: 64, height: 64 }
            }else{
                formattedValues[key] = value
            }
        }

        // Apply formatted values
        await documentViewer.getDocument().applyTemplateValues(formattedValues);

        const doc = documentViewer.getDocument();
        const data = await doc.getFileData({downloadType: "pdf"});
        const arr = new Uint8Array(data);
        const blob = new Blob([arr], { type: 'application/pdf' });
        instance.UI.loadDocument(blob, { extension: "pdf", filename: 'static-template.pdf' });
        return;
      
    }

    const createFormFields = async () => {
        const { documentViewer, Search, PDFNet, Math, Annotations, annotationManager} = instance.Core;
        const { WidgetFlags, Color } = Annotations;

        //Search regex and replace found results
        const searchText = '\\[.*?\]';
        const mode = Search.Mode.PAGE_STOP | Search.Mode.REGEX | Search.Mode.HIGHLIGHT;
        
        const replacer = await PDFNet.ContentReplacer.create();
        const results: any[] = [];

        const searchOptions = {
            // If true, a search of the entire document will be performed. Otherwise, a single search will be performed.
            fullSearch: true,
            // The callback function that is called when the search returns a result.
            onResult: async (result: any) => {
                // with 'PAGE_STOP' mode, the callback is invoked after each page has been searched.
                if (result.resultCode === Search.ResultCode.FOUND) {
                    results.push(result);
                    // now that we have the result Quads, it's possible to highlight text or create annotations on top of the text
                }
            },
            onPageEnd: async (pageResult: any) => {
                const doc = await documentViewer.getDocument();
                const pdfDoc = await doc.getPDFDoc();
                const page = await pdfDoc.getPage(pageResult.pageNum);

                for(var result of results){
                    await replacer.addString(result.resultStr.slice(1,-1), '');
                    
                    const textQuad = result.quads[0].getPoints();
                    var rect = new Math.Quad(textQuad?.x1, textQuad?.y1, textQuad?.x2, textQuad?.y2, textQuad?.x3, textQuad?.y3, textQuad?.x4, textQuad?.y4).toRect();
                    
                    const flags = new WidgetFlags();
                    flags.set('Multiline', true);
                    flags.set('Required', true);
                 
                    const field = new Annotations.Forms.Field(result.resultStr.slice(1,-1).replace(/-+/g,""), {
                        type: 'Tx',
                        flags
                    });

                    const widgetAnnot = new Annotations.TextWidgetAnnotation(field, null);
    
                    widgetAnnot.PageNumber = pageResult.pageNum;
                    widgetAnnot.setRect(rect);
                    
                    annotationManager.getFieldManager().addField(field);
                    annotationManager.addAnnotation(widgetAnnot);
                    annotationManager.drawAnnotationsFromList([widgetAnnot]);
                }


                await replacer.process(page);

            }
        };

        documentViewer.textSearchInit(searchText, mode, searchOptions);
    }
    
    const reset = () =>{
        instance.UI.loadDocument(`/files/${file}`);
    }

    useEffect(() =>{
        if(!instance.Core) return;
        instance.UI.loadDocument(`/files/${file}`,
        {
            filename:file,
        });

        instance.Core.documentViewer.addEventListener('documentLoaded', () => {
            const { documentViewer } = instance.Core;
            const document = documentViewer.getDocument();

            if(document.getType() == "pdf"){
                createFormFields();
            }else{
                grabDocumentKeys();
            }
        });
    },[instance]);

  return (
    <Box>
        <Stack spacing={'5'}>
            <Heading>Static Templates</Heading>
            <Divider />
            <Text>Securely merge JSON data with MS Word, PowerPoint and Excel templates directly in the browser - no server required! Easily generate documents using text/image templates with JavaScript. </Text>
            <Text>Clauses are denoted using variables in double curly braces, {`{{var}}`}.</Text>
            <Divider />
            {keys.map((key, index) => {
                return (
                    <Box key={key}>
                        <Text>{key}</Text>
                        <Input type='text' {...register(`${key}` as any)} />
                    </Box>
                )
            })}
            <Divider />
            <Button onClick={fillTemplate}>Fill template</Button>
            <Button onClick={reset} backgroundColor="red.600" _hover={{ backgroundColor:"red.200" }}>Reset</Button>
        </Stack>
    </Box>
  );
}

export default StaticTemplates;