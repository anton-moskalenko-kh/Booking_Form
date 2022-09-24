// Core
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    loading: false,
};

const destination = createSlice({
    name: 'destination',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setItems, setLoading } = destination.actions;
export default destination.reducer;