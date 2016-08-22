import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import AddBookFab from '../../app/components/add-book-fab';
import AppToolbar from '../../app/components/app-toolbar';
import Book from '../../app/components/book';
import BookList from '../../app/components/book-list';
import BrowseButton from '../../app/components/browse-button';
import OkButton from '../../app/components/ok-button';
import SetupLibrary from '../../app/components/setup-library';

describe('Components', () => {
    describe('<AddBookFab>', () => {
        it('renders a <FloatingActionButton> with a <ContentAdd> icon', () => {
            const wrapper = shallow(<AddBookFab />);
            expect(wrapper.find('.add-book-fab')).to.have.length(1);
            expect(wrapper.find('FloatingActionButton')).to.have.length(1);
            expect(wrapper.find('ContentAdd')).to.have.length(1);
        });

        it('has an onFabclick event', () => {
            const onFabClick = sinon.spy();
            const wrapper = shallow(<AddBookFab onFabClick={onFabClick} />);
            wrapper.find('FloatingActionButton').simulate('click');
            expect(onFabClick.calledOnce).to.equal(true);
        });
    });

    describe('<AppToolbar>', () => {
        it('renders a <Paper>, <Toolbar>, <ToolbarGroup>, and <ToolbarTitle>', () => {
            const wrapper = shallow(<AppToolbar />);
            expect(wrapper.find('Paper')).to.have.length(1);
            expect(wrapper.find('Toolbar')).to.have.length(1);
            expect(wrapper.find('ToolbarGroup')).to.have.length(1);
            expect(wrapper.find('ToolbarTitle')).to.have.length(1);
        });
    });

    describe('<Book>', () => {
        it('renders a <Card>, <CardMedia>, and <CardHeader>', () => {
            const wrapper = shallow(<Book title="Mistborn" author="Sanderson" />);
            expect(wrapper.find('Card')).to.have.length(1);
            expect(wrapper.find('CardMedia')).to.have.length(1);
            expect(wrapper.find('CardHeader')).to.have.length(1);
        });
    });

    describe('<BookList>', () => {
        it('renders a <div>, <ul>, and <AddBookFab>', () => {
            const wrapper = shallow(<BookList books={[]} />);
            expect(wrapper.find('div')).to.have.length(1);
            expect(wrapper.find('ul')).to.have.length(1);
            expect(wrapper.find('AddBookFab')).to.have.length(1);
        });
    });

    describe('<BrowseButton>', () => {
        it('renders a <RaisedButton>', () => {
            const wrapper = shallow(<BrowseButton onBrowseClick={() => {}} />);
            expect(wrapper.find('RaisedButton')).to.have.length(1);
        });

        it('has an onBrowseClick event', () => {
            const onBrowseClick = sinon.spy();
            const wrapper = shallow(<BrowseButton onBrowseClick={onBrowseClick} />);
            wrapper.find('RaisedButton').simulate('click');
            expect(onBrowseClick.calledOnce).to.equal(true);
        });
    });

    describe('<OkButton>', () => {
        it('renders a <RaisedButton>', () => {
            const wrapper = shallow(<OkButton />);
            expect(wrapper.find('RaisedButton')).to.have.length(1);
        });

        it('has an onOkClick event', () => {
            const onOkClick = sinon.spy();
            const wrapper = shallow(<OkButton onOkClick={onOkClick} />);
            wrapper.find('RaisedButton').simulate('click');
            expect(onOkClick.calledOnce).to.equal(true);
        });
    });

    describe('<SetupLibrary>', () => {
        it('renders a <TextField>, <BrowseButton>, and <OkButton>', () => {
            const wrapper = shallow(<SetupLibrary pathValue="abc" onBrowseClick={() => {}} noPath={true} />);
            expect(wrapper.find('TextField')).to.have.length(1);
            expect(wrapper.find('BrowseButton')).to.have.length(1);
            expect(wrapper.find('OkButton')).to.have.length(1);
        });
    });
});
