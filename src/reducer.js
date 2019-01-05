import {TESTIMMUTABLE_CONSTANTS} from './contanters';
import {Map} from 'immutable';

const initState = Map({
    initData:111,
});

const rootReducer = (state=initState,action) => {
    switch(action.type){
        case TESTIMMUTABLE_CONSTANTS:
            return state.set('initData',action.testData)
        default:
            return state;
    }
}

export default rootReducer;