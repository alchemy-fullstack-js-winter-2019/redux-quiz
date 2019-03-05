import { UPDATE_TITLE, UPDATE_SUBTITLE } from '../actions/action';

const initialState = {
    title: '',
    subtitle: ''
};

export default function reducer(state =  initialState, action) {
    switch(action.type) {
        case UPDATE_TITLE:
            return {...state, title: action.payload }
        case UPDATE_SUBTITLE: 
            return{...state, subtitle: action.payload }
        default:
            return state; 
    }
};

