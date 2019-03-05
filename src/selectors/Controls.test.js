import { getTitle, getSubtitle } from './Controls';


describe('redux selector tests', () => {
    it('selects the current title from the store', () => {
        const state = {
            Controls: {
                title: 'the current title',
                subtitle: 'the current subtitle'
            }
        };

        const title = getTitle(state);
        expect(title).toEqual('the current title');
    });
    it('selects the current subtitle from the store', () => {
        const state = {
            Controls: {
                title: 'the current title',
                subtitle: 'the current subtitle'
            }
        };

        const subtitle = getSubtitle(state);
        expect(subtitle).toEqual('the current subtitle');
    });
})
;
