import React from 'react';
import renderer from 'react-test-renderer';
import Controls from './Controls';


describe('control component tests', () => {
    it('renders the form controls correctly', () => {
        const tree = renderer.create(
            <Controls
                subtitle=''
                title=''
                onChange={() => {}}
            />
        );
        expect(tree).toMatchSnapshot;
    });
});
