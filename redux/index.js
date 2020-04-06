import { createStore, applyMiddleware, combineReducers } from 'redux';
import { forEachModule } from '../utils/modules';


const reducers = {};

//Import all stores from each module
forEachModule((module)=> {
    if (module.STORES) {
        Object.keys(module.STORES).forEach((storeName)=> {
            let store = module.STORES[storeName];
            reducers[store.name || storeName]  = store.handleAction
        });
    }
});

const rootReducer = combineReducers(reducers);

export const initStore = (initialState = {}) => {
    return createStore(rootReducer, initialState);
};