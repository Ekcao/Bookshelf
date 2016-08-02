import { expect } from 'chai';
import books from '../app/reducers/books';

describe('Reducers', () => {
    describe('books', () => {
        it('returns default state if not proper action type', () => {
            expect(books(undefined, {type: 'DEFAULT'})).to.eql([]);
        });

        it('add book increases length by 1', () => {
            var state = [];
            var action = {
                type: 'ADD_BOOK',
                title: 'Mistborn',
                author: 'Brandon Sanderson'
            };
            expect(books(state, action)).to.have.lengthOf(1);
            expect(state).to.eql([]);
        });

        it('remove book decreases length by 1', () => {
            var state = [
                {title: 'Mistborn', author: 'Brandon Sanderson'}
            ];
            var action = {
                type: 'REMOVE_BOOK',
                index: 0
            };
            expect(books(state, action)).to.have.lengthOf(0);
        });

        it('does nothing if book is not in state', () => {
            var state = [
                {title: 'Mistborn', author: 'Brandon Sanderson'}
            ];
            var action = {
                type: 'REMOVE_BOOK',
                index: 2
            };
            expect(books(state,action)).to.have.lengthOf(1);
        });
    });
});
