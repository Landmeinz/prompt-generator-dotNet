
const setUserInputs = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_INPUTS':
            console.log('--- hit SET_USER_INPUTS reducer', action.payload);
            return [...state, action.payload];

        default:
            return state;
    }
} // keywordsReducer;

export default setUserInputs;