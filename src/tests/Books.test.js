/* eslint-disable import/extensions */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Books from '../components/Books';
import store from '../redux/store';

it('Book page renders rockets and details', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Books />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
