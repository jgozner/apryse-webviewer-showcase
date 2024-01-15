import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, Text, Icon , Stack, Button, Wrap, Flex, Heading, Divider, UnorderedList, ListItem, HStack, FormControl, FormLabel, Input, Spinner, Center } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import useWebViewer from '../../hooks/useWebViewer';
import { Core } from '@pdftron/webviewer';
import { useAppSelector } from '../../store/hooks';
import { useUpdateEffect } from 'usehooks-ts';

type DocKey = {
    DocKey: string,
    DocOrder: number
}

const StaticTemplates = () => {
    const file = "static-template.docx";

    const { register, getValues } = useForm({
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

    const { instance, loadDocument, document, loadingDocument } = useWebViewer();
    const [keys, setKeys] = useState<DocKey[]>([]);
    const [documentFilled, setDocumentFilled] = useState<boolean>();
    const webviewerState = useAppSelector((state) => state?.webviewer);
    const [editModeEnabled, setEditModeEnabled] = useState<boolean>(false);

    const grabDocumentKeys = async () => {
        if(!document) return;
        
        const templateSchema = await document.getTemplateKeys("schema") as Core.TemplateSchema;
        const tempKeys = [];

        for (const [key, value] of Object.entries(templateSchema.keys)) {
            tempKeys.push({
                DocKey: key,
                DocOrder: value.docOrder
            } as DocKey)
        }

        tempKeys.sort((a,b) => a.DocOrder -  b.DocOrder);

        setKeys(tempKeys);
    }

    const fillTemplate = async () => {
        if(!document) return;

        const { PDFNet } = instance.Core;

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
        await document.applyTemplateValues(formattedValues);
        setDocumentFilled(true)

        const arrayBuffer = await document.getFileData({downloadType: "pdf"});

        if(arrayBuffer){
            createFormFields(arrayBuffer)
        }
    }

    const createFormFields = async (arrayBuffer: ArrayBuffer) => {
        
        const { PDFNet, Math } = instance.Core;

        const txtSearch = await PDFNet.TextSearch.create();
        const document = await PDFNet.PDFDoc.createFromBuffer(arrayBuffer);
        const replacer = await PDFNet.ContentReplacer.create();

        const pattern = '\\[.*?\]';
        const mode = PDFNet.TextSearch.Mode.e_whole_word | PDFNet.TextSearch.Mode.e_reg_expression | PDFNet.TextSearch.Mode.e_highlight;

        txtSearch.begin(document, pattern, mode);

        let result = await txtSearch.run();

        while (true) {
            if (result.code === PDFNet.TextSearch.ResultCode.e_found) {
                let highlights = result.highlights;

                highlights.begin(document);
                let quad = (await highlights.getCurrentQuads())[0];
                var mathRect = new Math.Quad(quad?.p1x, quad?.p1y, quad?.p2x, quad?.p2y, quad?.p3x, quad?.p3y, quad?.p4x, quad?.p4y).toRect();
                var rect = new  PDFNet.Rect(mathRect.x1, mathRect.y1, mathRect.x2, mathRect.y2);
    
                await replacer.addString(result.out_str.slice(1,-1), '');

                const text = await  PDFNet.TextWidget.create(document, rect);
                text.setBorderColor(await  PDFNet.ColorPt.init(0, 0, 0), 3);
                text.setBackgroundColor(await  PDFNet.ColorPt.init(240/255, 240/255, 240/255), 3);
    
                await text.refreshAppearance();
    
                const page = await document.getPage(result?.page_num)
                page.annotPushBack(text);
                await replacer.process(page);
            } else if (result.code ===  PDFNet.TextSearch.ResultCode.e_done) {
              break;
            }
            result = await txtSearch.run();
        }


        const buffer = await document.saveMemoryBuffer(PDFNet.SDFDoc.SaveOptions.e_linearized);
        const arr = new Uint8Array(buffer);
        const blob = new Blob([arr], { type: 'application/pdf' });
        loadDocument(blob, { extension: "pdf"})
    }

    const editTemplate = async () => {
        if(!document) return;

        const documentType = document.getType();

        const data = await document.getFileData({
            downloadType: documentType
        });
        const arr = new Uint8Array(data);
        const blob = new Blob([arr]);

        loadDocument(blob, { 
            extension: "docx",
            enableOfficeEditing: true
        })

        setEditModeEnabled(true)
    }

    const saveTemplate = async () => {
        if(!document) return;

        const documentType = document.getType();

        const data = await document.getFileData({
            downloadType: documentType
        });

        const arr = new Uint8Array(data);
        const blob = new Blob([arr]);

        loadDocument(blob, { 
            extension: "docx",
        })

        setEditModeEnabled(false)
    }

    const reset = () =>{
        setDocumentFilled(false)
        loadDocument(`/files/${file}`);
    }

    useUpdateEffect(() => {
        if(!webviewerState.document || documentFilled || editModeEnabled) return;

        grabDocumentKeys();

    },[webviewerState.document])

    useEffect(() =>{
        if(!instance?.Core) return;
        
        loadDocument(`/files/${file}`);
    },[instance]);

  return (
    <Box>
       <Stack spacing={'5'} mt="2">
            <Heading>Static Templates</Heading>
            <Divider />
            <Text>Securely merge JSON data with MS Word, PowerPoint and Excel templates directly in the browser - no server required! Easily generate documents using text/image templates with JavaScript. </Text>
            <Text>Clauses are denoted using variables in double curly braces, {`{{var}}`}.</Text>
            <Divider />
            {!documentFilled && (
                <>
                    {(loadingDocument || !document) && !editModeEnabled ? (
                        <>
                            <Center>
                                <Spinner />
                            </Center>
                            <Divider />
                        </>
                    ):(
                        <>
                            {!editModeEnabled && (
                            <>
                                {keys.map((key, index) => {
                                    return (
                                        <Box key={key.DocKey}>
                                            <Text>{key.DocKey}</Text>
                                            <Input type='text' {...register(`${key.DocKey}` as any)} />
                                        </Box>
                                    )
                                })}
                                <Divider />
                            </>
                            )}
                        </>
                    )}
                </>
            )}

            <HStack spacing={'5'}>
                {editModeEnabled ? (
                    <Button w="100%" onClick={saveTemplate} colorScheme={"green"}>Save template</Button>
                ): (
                    <>
                        <Button w="100%" onClick={editTemplate} isDisabled={documentFilled} colorScheme={"blue"}>Edit template</Button>
                        <Button w="100%" onClick={fillTemplate} isDisabled={documentFilled} colorScheme={"green"}>Fill template</Button>
                    </>
                )}
            </HStack>
            <Button onClick={reset} colorScheme={"red"}>Reset</Button>
        </Stack>
    </Box>
  );
}

export default StaticTemplates;