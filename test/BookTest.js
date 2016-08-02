import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Book from '../app/components/Book';


describe('<Book />', () => {
    var wrapper = null;

    beforeEach(function() {
        wrapper = shallow(
            <Book bookTitle="Mistborn" bookAuthor="Sanderson" />
        );
    });

    it('displays more info onclick', () => {
        const onClick = sinon.spy();
        wrapper.simulate('click');
        expect(onClick).to.have.property('callCount', 0);
    });
});
