import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

export const BASE_URL = 'https://localhost:7058';

// --- GET ALL KEYWORDS --- //
function* fetchKeywords() {
    let url = `${BASE_URL}/api/keyword`;
    try {
        const response = yield axios.get(url)
        yield put({ type: 'SET_KEYWORDS', payload: response.data })
        console.log('-- saga data response:', response.data);
        
    } catch (error) {
        console.log('ERROR fetchKeywords Saga', error);
    }
}; // fetchKeywords

// --- GET SINGLE KEYWORD --- //
function* fetchKeyword(action) {
    let url = `${BASE_URL}/api/keyword/${action.payload}`;
    try {
        const response = yield axios.get(url)
        yield put({ type: 'SET_KEYWORD', payload: response.data })
        console.log('-- saga data response:', response.data);
        
    } catch (error) {
        console.log('ERROR fetchKeyword Saga', error);
    }
}; // fetchKeyword

// --- POST NEW KEYWORD --- //
function* postKeyword(action) {
    let url = `${BASE_URL}/api/keyword`;
    try {
        yield axios.post(url, action.payload)
        yield put({ type: 'FETCH_KEYWORDS' })
    } catch (error) {
        console.log('ERROR', error);
        yield put({ type: 'ERROR postKeyword SAGA' })
    }
}; // postKeyword

function* keywordsSaga() {
    yield takeLatest('FETCH_KEYWORDS', fetchKeywords);
    yield takeLatest('FETCH_KEYWORD', fetchKeyword);
    yield takeLatest('POST_KEYWORD', postKeyword);
}; // keywordsSaga

export default keywordsSaga;