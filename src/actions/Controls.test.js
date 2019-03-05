import { updateTitle, UPDATE_TITLE, UPDATE_SUBTITLE, updateSubtitle } from './Controls';



describe('test control actions', () => {
    it('creates an action that updates the title', () => {
        const action = updateTitle('some title');

        expect(action).toEqual({
            type: UPDATE_TITLE,
            payload: 'some title'
        });
    });
    it('creates an action that updates the subtitle', () => {
        const action = updateSubtitle('some subtitle');

        expect(action).toEqual({
            type: UPDATE_SUBTITLE,
            payload: 'some subtitle'
        });
    });

})
;
