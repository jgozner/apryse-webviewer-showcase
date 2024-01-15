import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { WebViewerContext } from "../context/WebViewerContext";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { wvLoadDocument } from "../store/slices/webviewerSlice";
import { Core, UI } from "@pdftron/webviewer";

const useWebViewer = () => {
    const { instance } = useContext(WebViewerContext);
    const dispatch = useAppDispatch();

    //State
    const document = useAppSelector((state) => state.webviewer.document);
    const loadingDocument = useAppSelector((state) => state.webviewer.loadingDocument);

    const loadDocument = (documentPath: string | File | Blob | Core.Document | Core.PDFNet.PDFDoc, options?: UI.loadDocumentOptions) => {
        dispatch(wvLoadDocument());
        instance.UI.loadDocument(documentPath, options)  
    };

    return {
        instance,
        document,
        loadDocument, 
        loadingDocument
    }
}

export default useWebViewer;