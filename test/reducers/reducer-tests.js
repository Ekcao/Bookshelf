import { expect } from 'chai';
import books from '../../app/reducers/books';
import filter from '../../app/reducers/filter';
import setLibrary from '../../app/reducers/library';
import * as actions from '../../app/actions';

describe('Reducers', () => {
    describe('books', () => {
        it('returns default state of []', () => {
            expect(books(undefined, {type: 'DEFAULT'})).to.eql([]);
        });

        it('ADD_BOOK returns state with length +1', () => {
            var state = [];
            var action = {
                type: actions.ADD_BOOK,
                title: 'Mistborn',
                author: 'Brandon Sanderson'
            };
            expect(books(state, action)).to.have.lengthOf(1);
            expect(state).to.eql([]);
        });

        it('REMOVE_BOOK returns state with length -1', () => {
            var state = [
                { title: 'Mistborn', author: 'Brandon Sanderson' }
            ];
            var action = {
                type: actions.REMOVE_BOOK,
                index: 0
            };
            expect(books(state, action)).to.have.lengthOf(0);
        });

        it('REMOVE_BOOK returns same state if index does not exist', () => {
            var state = [
                { title: 'Mistborn', author: 'Brandon Sanderson' }
            ];
            var action = {
                type: actions.REMOVE_BOOK,
                index: 2
            };
            expect(books(state,action)).to.have.lengthOf(1);
        });
    });

    describe('filter', () => {
        it('returns default state of SHOW_ALL', () => {
            expect(filter(undefined, { type: 'NONE'})).to.eql(
                { filter: actions.Filters.SHOW_ALL, arg: '' }
            );
        });

        it('returns state with filter and arg', () => {
            var action = filter(undefined, {
                type: actions.SET_FILTER,
                filter: actions.Filters.BY_AUTHOR,
                arg: 'Brandon Sanderson'
            });

            expect(action.filter).to.equal(actions.Filters.BY_AUTHOR);
            expect(action.arg).to.equal('Brandon Sanderson');
        });
    });

    describe('library', () => {
        it('returns default state of { path: \'\', noPath: true }', () => {
            var action = setLibrary(undefined, { type: 'NONE' });
            expect(action).to.eql({ path: '', noPath: true });
        });

        it('returns state with path and noPath', () => {
            var action = setLibrary(undefined, {
                type: actions.SET_LIBRARY, path: 'Path', noPath: false
            });
            expect(action.path).to.equal('Path');
            expect(action.noPath).to.be.false;
        });
    });
});
