import reducer from './Controls';
import { UPDATE_TITLE, UPDATE_SUBTITLE } from '../actions/Controls';


describe('Control reducer tests', () => {
    it('handles an update title action', () => {
        const state = {
            title: '',
            subtitle: ''
        };

        const updatedState = reducer(state, {
            type: UPDATE_TITLE,
            payload: 'some updated title'
        });
        expect(updatedState).toEqual({
            title: 'some updated title',
            subtitle: ''
        });
    });
    it('handles an update subtitle action', () => {
        const state = {
            title: '',
            subtitle: ''
        };

        const updatedState = reducer(state, {
            type: UPDATE_SUBTITLE,
            payload: 'some updated subtitle'
        });
        expect(updatedState).toEqual({
            title: '',
            subtitle: 'some updated subtitle'
        });
    });
})
;
