
// import { combineReducers } from 'react-redux';
import { combineReducers } from 'redux'
import errorsReducer from './errors.reducer';
import currentDateReducer from './currentDate.Reducer';
import keywordsReducer from './keywords.reducer';
import categoriesReducer from './categories.reducer';
import randomKeywords from './keywordsRandom.reducer';
import selectedCategories from './selectedCategories.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors: errorsReducer,              // contains registrationMessage and loginMessage
  categories: categoriesReducer,      // all categories in the DB
  keywords: keywordsReducer,      
  randomKeywords: randomKeywords,    // all keywords in the DB
  currentDate: currentDateReducer,
  selectedCategories: selectedCategories, // getting the current year month and day

});

export default rootReducer;
