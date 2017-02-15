import { createStore } from 'redux';
import Reducers from './Reducers';

const initial = {
    name: 'John'
};

export default createStore(Reducers, initial);
