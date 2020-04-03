import { createStore, applyMiddleware, combineReducers } from 'redux';

const authReducer = {};
const rootReducer = combineReducers({
    authentication: authReducer,
});

export const initStore = (initialState = {}) => {
    return createStore(rootReducer, initialState);
};