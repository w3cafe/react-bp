import keyMirror from 'keymirror';

class ApplicationStore {
    static name = 'app';
    static TYPES = keyMirror({
        INCREASE_COUNT: null,
    });

    static initialState = {
        counter: 0
    };

    static handleAction(state = ApplicationStore.initialState, action) {
        switch (action.type) {
            case ApplicationStore.TYPES.INCREASE_COUNT:
                return {
                    ...state,
                    counter: state.counter + 1
                };
            default:
                return state;
        }
    }
}

export default ApplicationStore;