import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';

describe('display component tests', () => {
    it('renders the display component correctly', () => {
        const tree = renderer.create(
            <Display
                subtitle=''
                title=''
            />
        );
        expect(tree).toMatchSnapshot;
    });
});
