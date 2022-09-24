// Parts
import { createAction } from '@reduxjs/toolkit';

const hotelsAsyncActions = Object.freeze({
    getHotelsAsync: createAction('GET_HOTELS_ASYNC'),
});

export const {
    getHotelsAsync,
} = hotelsAsyncActions;