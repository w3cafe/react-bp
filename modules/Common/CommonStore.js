import keyMirror from 'keymirror';

class CommonStore {
    static name = 'common';
    static TYPES = keyMirror({
        INCREASE_COUNT: null,
    });

    static initialState = {
        counter: 0
    };

    static handleAction(state = this.initialState, action) {
        switch (action.type) {
            case this.TYPES.INCREASE_COUNT:
                return {
                    ...state,
                    counter: state.counter + 1
                };
            default:
                return state;
        }
    }
}

export default CommonStore;