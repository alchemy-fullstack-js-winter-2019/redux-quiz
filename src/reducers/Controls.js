
import { UPDATE_SUBTITLE, UPDATE_TITLE } from '../actions/Controls';

const initalState = {
    title: '',
    subtitle: ''
};
export default function reducer(state = initalState, action) {
    switch(action.type) {
        case UPDATE_TITLE:
            return { ...state, title: action.payload };
        case UPDATE_SUBTITLE:
            return { ...state, subtitle: action.payload };
        default:
            return state;
    }
}
