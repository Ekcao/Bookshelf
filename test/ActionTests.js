import { expect } from 'chai';
import { addBook, removeBook } from '../app/actions';


describe('Actions', () => {
    describe('addBook', () => {
        it('has both title and author', () => {
            var action = addBook('Mistborn', 'Brandon Sanderson');
            expect(action.type).to.equal('ADD_BOOK');
            expect(action.title).to.exist;
            expect(action.author).to.exist;
        });

        it('can have no author', () => {
            var action = addBook('Mistborn', null);
            expect(action.author).to.equal('');
            expect(action.type).to.equal('ADD_BOOK');
        });
    });

    describe('removeBook', () => {
        it('removes a book using index', () => {
            var action = removeBook(0);
            expect(action.type).to.equal('REMOVE_BOOK');
        });
    });

    describe('sortBooks', () => {
        it('passes this test', () => {
            expect(true).to.be.true;
        });
    });

    describe('filterBooks', () => {
        it('passes this test', () => {
            expect(true).to.be.true;
        });
    });
});
