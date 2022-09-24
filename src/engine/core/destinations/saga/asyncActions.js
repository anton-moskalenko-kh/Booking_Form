// Parts
import { createAction } from '@reduxjs/toolkit';

const destinationsAsyncActions = Object.freeze({
    getDestinationsAsync: createAction('GET_DESTINATIONS_ASYNC'),
});

export const {
    getDestinationsAsync,
} = destinationsAsyncActions;