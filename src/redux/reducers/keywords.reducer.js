const keywordsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_KEYWORDS':
            console.log('--- hit SET_KEYWORDS reducer', action.payload);
            return action.payload;

        case 'SET_KEYWORD':
            console.log('--- hit SET_KEYWORD reducer', action.payload);
            return action.payload;
            
        default:
            return state;
    }
} // keywordsReducer;

export default keywordsReducer;