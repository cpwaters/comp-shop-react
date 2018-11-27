import authReducer from './authReducer';
import storageReducer from './storageReducer';
import drinkReducer from './drinkReducer';
import foodReducer from './foodReducer';
import hhReducer from './hhReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; 
import { firebaseReducer } from 'react-redux-firebase'
 
const rootReducer = combineReducers({
    auth: authReducer,
    storage: storageReducer,
    drink: drinkReducer,
    food: foodReducer,
    hh: hhReducer,
    firestore: firestoreReducer, 
    firebase: firebaseReducer
});

export default rootReducer