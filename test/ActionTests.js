import { expect } from 'chai';
import { addBook, removeBook, sortBooks, filterBooks } from '../app/actions';


describe('Actions', () => {
    describe('addBook', () => {
        it('has both title and author', () => {
            var action = addBook('Mistborn', 'Brandon Sanderson');
            expect(action.type).to.equal('ADD_BOOK');
            expect(action.title).to.exist;
            expect(action.author).to.exist;
        });

        it('must have title', () => {
            var action = addBook(null, 'Brandon Sanderson');
            expect(action.title).to.not.exist;
            expect(action.type).to.equal('ERROR');
        });

        it('can have no author', () => {
            var action = addBook('Mistborn', null);
            expect(action.author).to.equal('');
            expect(action.type).to.equal('ADD_BOOK');
        });
    });
});
