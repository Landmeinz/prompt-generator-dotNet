const selectedCategories = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_CATEGORIES':
            // console.log('--- hit SET_CATEGORIES reducer', action.payload);
            return [...state, action.payload];

        case 'REMOVE_SELECTED_CATEGORY':
            const index = state.indexOf(action.payload);
            if (index > -1) { // only splice array when item is found
                state.splice(index, 1); // 2nd parameter means remove one item only
            }
            return [...state];

        default:
            return state;
    }
} // selectedCategories;

export default selectedCategories;