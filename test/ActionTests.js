import { expect } from 'chai';
import { ADD_BOOK, REMOVE_BOOK, SET_FILTER, Filters, addBook, removeBook, filterBooks } from '../app/actions';


describe('Actions', () => {
    describe('addBook', () => {
        it('has both title and author', () => {
            var action = addBook('Mistborn', 'Brandon Sanderson');
            expect(action.type).to.equal(ADD_BOOK);
            expect(action.title).to.exist;
            expect(action.author).to.exist;
        });

        it('can have no author', () => {
            var action = addBook('Mistborn', null);
            expect(action.author).to.equal('');
            expect(action.type).to.equal(ADD_BOOK);
        });
    });

    describe('removeBook', () => {
        it('removes a book using index', () => {
            var action = removeBook(0);
            expect(action.type).to.equal(REMOVE_BOOK);
        });
    });

    describe('sortBooks', () => {
        it('passes this test', () => {
            expect(true).to.be.true;
        });
    });

    describe('filterBooks', () => {
        it('can have default arg of \'\'', () => {
            expect(filterBooks(Filters.SHOW_ALL)).to.eql(
                { type: SET_FILTER, filter: Filters.SHOW_ALL, arg: '' }
            );
        });
    });
});
