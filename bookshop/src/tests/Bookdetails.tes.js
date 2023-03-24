/* eslint-disable import/extensions */
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Bookdetails from '../components/Bookdetails';
import store from '../redux/store';

it('Rocket page renders rockets and details', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Bookdetails />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render details', () => {
  render(<Bookdetails />);
  const detailsEl = Screen.getByTestId('test1');
  expect(detailsEl).toBeInTheDocument();
});
