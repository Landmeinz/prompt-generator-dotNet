
const keywordsRandom = (state = [], action) => {
    switch (action.type) {
        case 'SET_RANDOM_KEYWORDS':
            console.log('--- hit SET_RANDOM_KEYWORDS reducer', action.payload);
            return action.payload;

        default:
            return state;
    }
} // keywordsReducer;

export default keywordsRandom;