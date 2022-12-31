import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

export const BASE_URL = 'https://localhost:7058';

// --- GET ALL CATEGORIES --- //
function* fetchCategories() {
    let url = `${BASE_URL}/api/category`;
    try {
        const response = yield axios.get(url)
        yield put({ type: 'SET_CATEGORIES', payload: response.data })
        // console.log('-- saga data response:', response.data);
        
    } catch (error) {
        console.log('ERROR fetchCategories Saga', error);
    }
}; // fetchCategories

// // --- POST NEW MESSAGE --- //
// function* postKeyword(action) {
//     let url = `${BASE_URL}/api/keyword`;
//     try {
//         yield axios.post(url, action.payload)
//         yield put({ type: 'FETCH_KEYWORDS' })
//     } catch (error) {
//         console.log('ERROR', error);
//         yield put({ type: 'ERROR postKeyword SAGA' })
//     }
// }; // postMessage

function* categoriesSaga() {
    yield takeLatest('FETCH_CATEGORIES', fetchCategories);
    // yield takeLatest('POST_KEYWORD', postKeyword);
}; // keywordsSaga

export default categoriesSaga;