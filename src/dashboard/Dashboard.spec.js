// Test away
import React from 'react';
import { render } from 'react-testing-library';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should render without any crashes', () => {
    const helpers = render(<Dashboard />);
    console.log('helpers', helpers);
  });
});
