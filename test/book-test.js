import React from 'react';
import {expect} from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Book from '../app/components/book.js';


describe('<Book />', () => {
    var wrapper = null;

    before(function() {
        wrapper = mount(
            <Book bookTitle="Mistborn" bookAuthor="Sanderson" />
        );
    });

    it('has title and author props', () => {
        expect(wrapper.props().bookTitle).to.equal("Mistborn");
    });

    it('can change title or author props', () => {
        expect(wrapper.props().bookTitle).to.equal("Mistborn");
        wrapper.setProps({ bookTitle: 'Mistborn: The Final Empire' });
        expect(wrapper.props().bookTitle).to.equal("Mistborn: The Final Empire");
    });

    it('displays more info onclick', () => {
        const onClick = sinon.spy();
        wrapper.simulate('click');
        expect(onClick).to.have.property('callCount', 0);
    });
});
