import { Core, UI, WebViewerInstance } from '@pdftron/webviewer'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type Dimensions = {
    width: number, 
    height: number
}

type WebViewerState = {
    viewerDimensions?: Dimensions,
    loadingDocument: boolean,
    document?: Core.Document 
}

const initialState: WebViewerState = {
    viewerDimensions: undefined,
    loadingDocument: false,
    document: undefined
}

const webviewerSlice = createSlice({
    name: 'webviewer',
    initialState,
    reducers: {
        setViewerDimensions: (state, action: PayloadAction<Dimensions>) =>{
            state.viewerDimensions = action.payload;
        },
        wvLoadDocument: (state) => {
            state.loadingDocument = true;
            state.document = undefined;
        },
        wvDocumentLoaded: (state, action: PayloadAction<Core.Document>) => {
            state.loadingDocument = false;
            state.document = action.payload;
        },
 
    }
});

export const {setViewerDimensions, wvLoadDocument, wvDocumentLoaded} = webviewerSlice.actions;

export default webviewerSlice.reducer;