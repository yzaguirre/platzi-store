import actions from '../../actions/';
import ProductMock from '../../__mocks__/components/ProductMock';
import { act } from 'react-test-renderer';

describe('Actions', () => {
    test('addToCart Action', () => {
        const payload = ProductMock;
        const expected = {
            type: 'ADD_TO_CART',
            payload,
        };
        expect(actions.addToCart(payload)).toEqual(expected);
    });
});