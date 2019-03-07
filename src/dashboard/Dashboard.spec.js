// Test away
import React from 'react';
import { render } from 'react-testing-library';
import Dashboard from './Dashboard';
import renderer from 'react-test-renderer';

describe('<Dashboard />', () => {
  it('should render without any crashes', () => {
    const helpers = render(<Dashboard />);
    console.log('helpers', helpers);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
