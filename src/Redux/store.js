import { createStore } from 'redux';
import rootReducer from './Reducer/index';

const makeStore = () => {
    const store = createStore(rootReducer);
    return store;
}

export default makeStore();