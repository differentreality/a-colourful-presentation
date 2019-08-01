import {createStore} from 'redux';
import themeReducer from './reducers/themeReducer';

const initialState={
    color:'stella',
    isMenuOpen:false
}


const store = createStore(themeReducer,initialState);

export default store;