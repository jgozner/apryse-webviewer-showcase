import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type WebViewerState = {
    initialized: boolean,
}

const initialState: WebViewerState = {
    initialized: false
}

const webviewerSlice = createSlice({
    name: 'webviewer',
    initialState,
    reducers: {
        setInitialized: (state, action: PayloadAction<boolean>) =>{
            state.initialized = action.payload;
        }
    }
});

export const { setInitialized } = webviewerSlice.actions;

export default webviewerSlice.reducer;