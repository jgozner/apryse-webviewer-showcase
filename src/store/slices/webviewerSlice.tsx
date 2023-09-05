import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type Dimensions = {
    width: number, 
    height: number
}
type WebViewerState = {
    initialized: boolean,
    viewerDimensions: Dimensions | null
}

const initialState: WebViewerState = {
    initialized: false,
    viewerDimensions: null
}

const webviewerSlice = createSlice({
    name: 'webviewer',
    initialState,
    reducers: {
        setInitialized: (state, action: PayloadAction<boolean>) =>{
            state.initialized = action.payload;
        },
        setViewerDimensions: (state, action: PayloadAction<Dimensions>) =>{
            state.viewerDimensions = action.payload;
        }
    }
});

export const { setInitialized, setViewerDimensions } = webviewerSlice.actions;

export default webviewerSlice.reducer;