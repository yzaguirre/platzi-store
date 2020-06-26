import reducer from '../../reducers';
import ProductMock from '../../__mocks__/components/ProductMock';
// import Product from '../../components/Product';
// import { create } from 'react-test-renderer';

describe('Reducers', () => {
    test('Retornar initial State', () => {
        expect(reducer({}, '')).toEqual({});
    });
    test('ADD_TO_CART', () => {
        const initialState = {
            cart: [],
        };
        const payload = ProductMock;
        const action = {
            type: 'ADD_TO_CART',
            payload,
        }
        const expected = {
            cart: [
                ProductMock,
            ],
        };
        expect(reducer(initialState, action)).toEqual(expected);
    });
});