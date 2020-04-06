import modules from '../modules';

export const forEachModule = (cb)=> {
    Object.keys(modules).forEach((moduleName) => {
        cb(modules[moduleName]);
    })
}