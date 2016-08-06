import { expect } from 'chai';
import * as actions from '../../app/actions';


describe('Actions', () => {
    describe('addBook', () => {
        it('returns action with type ADD_BOOK', () => {
            var action = actions.addBook('Mistborn', 'Brandon Sanderson');
            expect(action.type).to.equal(actions.ADD_BOOK);
        });

        it('returns action with title and author', () => {
            var action = actions.addBook('Mistborn', 'Brandon Sanderson');
            expect(action.title).to.equal('Mistborn');
            expect(action.author).to.equal('Brandon Sanderson');
        });

        it('returns action with no author', () => {
            var action = actions.addBook('Mistborn', null);
            expect(action.author).to.equal('');
        });
    });

    describe('removeBook', () => {
        it('returns action with type REMOVE_BOOK', () => {
            var action = actions.removeBook(0);
            expect(action.type).to.equal(actions.REMOVE_BOOK);
        });

        it('returns action with index', () => {
            var action = actions.removeBook(0);
            expect(action.index).to.equal(0);
        });
    });

    describe('sortBooks', () => {
        it('passes this test', () => {
            expect(true).to.be.true;
        });
    });

    describe('filterBooks', () => {
        it('returns action with type SET_FILTER', () => {
            var action = actions.filterBooks(actions.Filters.SHOW_ALL);
            expect(action.type).to.equal(actions.SET_FILTER);
        });

        it('returns action with a filter and arg', () => {
            var action = actions.filterBooks(actions.Filters.BY_AUTHOR, 'Sanderson');
            expect(action.filter).to.equal(actions.Filters.BY_AUTHOR);
            expect(action.arg).to.equal('Sanderson');
        });

        it('returns action with a default arg of \'\'', () => {
            var action = actions.filterBooks(actions.Filters.SHOW_ALL);
            expect(action.arg).to.equal('');
        });
    });

    describe('setLibrary', () => {
        it('returns action with type SET_LIBRARY', () => {
            var action = actions.setLibrary('Path');
            expect(action.type).to.equal(actions.SET_LIBRARY);
        });

        it('returns action with a path', () => {
            var action = actions.setLibrary('Path');
            expect(action.path).to.equal('Path');
        });
    });
});
