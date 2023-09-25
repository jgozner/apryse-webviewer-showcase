import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, Text, Icon , Stack, Button, Wrap, Flex, Heading, Divider } from '@chakra-ui/react'
import { Core } from '@pdftron/webviewer';
import { WebViewerContext } from '../../context/WebViewerContext';

const AnnotationClipping = () => {
    const file = "clipping.pdf";
    const { instance } = useContext(WebViewerContext);

    useEffect(() =>{
        if(!instance.Core) return;

        instance.UI.loadDocument(`/files/${file}`);
    },[instance]);

    const copyDocumentAnnotationsIntoNewDocument = async (documentViewer: Core.DocumentViewer, annotationManager: Core.AnnotationManager, pdfNet: typeof Core.PDFNet) => {
        const currentDocument = await documentViewer.getDocument();
        const xfdfString = await annotationManager.exportAnnotations();
        const data = await currentDocument.getFileData({
            // saves the document with annotations in it
            xfdfString
        });
        const arr = new Uint8Array(data);

        const workingDocument = await pdfNet.PDFDoc.createFromBuffer(arr);

        const tempDocument = await pdfNet.PDFDoc.create();
        const tempDocumentSDF = await tempDocument.getSDFDoc();

        const currentWorkingPage = await workingDocument.getPage(1);
        const currentWorkingPageNumOfAnnots = await currentWorkingPage.getNumAnnots();
        const tempPage = await tempDocument.pageCreate(new pdfNet.Rect(0, 0, await currentWorkingPage.getPageWidth(), await currentWorkingPage.getPageHeight()))
        tempDocument.pagePushBack(tempPage);

        for(var i = 0; i < currentWorkingPageNumOfAnnots; i++){
            const annot = await currentWorkingPage.getAnnot(i);
            const annotSDF = await annot.getSDFObj();
            const newAnnotObj = await tempDocumentSDF.importObj(annotSDF, true);
            const newAnnot = await pdfNet.Annot.createFromObj(newAnnotObj) ;
            await tempPage.annotPushBack(newAnnot)
        }

        return tempDocument;
    }
    const clip = async () => {
        const { PDFNet, documentViewer, annotationManager } = instance.Core;

        const document = await copyDocumentAnnotationsIntoNewDocument(documentViewer, annotationManager, PDFNet);
        const newDocument = await PDFNet.PDFDoc.create();

        const documentPages = [];
        for (let itr = await document.getPageIterator(); await itr.hasNext(); await itr.next()) {
            documentPages.push(await itr.current());
        }

        const eb = await PDFNet.ElementBuilder.create();
        const writer = await PDFNet.ElementWriter.create();

        let element;
        let gstate;

        // Start a new page ------------------------------------
        const pageRect = await PDFNet.Rect.init(0, 0, 2388.38, 7143.13);
        const importedPages = await newDocument.importPages(documentPages)

        const srcPage = importedPages[0];
        const newPage = await newDocument.pageCreate(pageRect);

        writer.beginOnPage(newPage);
        eb.reset();

        const xTransform = 386.1943;
        const yTransform = 149.3741;

        writer.writeElement(await eb.createGroupBegin());
        eb.pathBegin();
        eb.moveTo(2388.38, 7143.13);

        eb.curveTo(1944.972, 7102.16, 1464.734, 7038.333, 1193.151, 6808.127);
        eb.curveTo(894.348, 6553.166, 669.302, 6091.952, 684.155, 5676.523);
        eb.curveTo(679.215, 3886.355, 674.275, 2096.186, 669.335, 206.018);

        eb.closePath();

        // path is now constructed
        element = await eb.pathEnd();
        element.setPathClip(true);
        element.setPathStroke(false);
        gstate = await element.getGState();

        gstate.setTransform(1, 0, 0, 1, -xTransform, -yTransform);
        writer.writeElement(element);

        const pageElement = await eb.createFormFromPage(srcPage);
        const pageElementGState = await pageElement.getGState();
        pageElementGState.setTransform(1, 0, 0, 1, xTransform, yTransform)
        writer.writePlacedElement(pageElement);

        // Restore the graphics state
        writer.writeElement(await eb.createGroupEnd());

        writer.end(); // save changes to the current page
        newDocument.pagePushBack(newPage);

        instance.UI.loadDocument(newDocument)
    }

    const reset = () =>{
        instance.UI.loadDocument(`/files/${file}`);
    }

  return (
    <Box>
        <Stack spacing={'5'}>
            <Heading>Annotation Clipping</Heading>
            <Divider />
            <Text>Put any annotations or images on the document, and once you're finished, click the "clip" button below. This will flatten all the annotations into the clip path outlined in the document.</Text>
            <Button onClick={clip}>Clip</Button>
            <Button onClick={reset} backgroundColor="red.600" _hover={{ backgroundColor:"red.200" }}>Reset</Button>
        </Stack>
    </Box>
  );
}

export default AnnotationClipping;