import {createStore} from 'redux';
import themeReducer from './reducers/themeReducer';

const initialState={
    color:'stella'
}


const store = createStore(themeReducer,initialState);

export default store;