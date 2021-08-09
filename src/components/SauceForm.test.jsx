import React from 'react';
import { render } from '@testing-library/react';
import SauceForm from './SauceForm';

describe('SauceForm component snapshot', () => {
  it('render Sauce form', () => {
    const { asFragment } = render(
      <SauceForm />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
