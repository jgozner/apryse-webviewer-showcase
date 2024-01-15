import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Demo } from '../../config/demos';

type DemoState = {
    demos: Array<Demo>,
}

const initialState: DemoState = {
    demos: []
}

const demoSlice = createSlice({
    name: 'webviewer',
    initialState,
    reducers: {
        setDemos: (state, action: PayloadAction<Array<Demo>>) =>{
            state.demos = action.payload;
        },
        setDemoActive: (state, action: PayloadAction<boolean>) =>{
        },
    }
});

export const { setDemos, setDemoActive } = demoSlice.actions;

export default demoSlice.reducer;