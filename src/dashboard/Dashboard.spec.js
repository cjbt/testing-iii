// Test away
import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';

describe('<Dashboard />', () => {
  it('should render without any crashes', () => {
    const helpers = render(<Dashboard />);
    console.log('helpers', helpers);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('<Controls /> should render', () => {
    render(<Controls />);
  });
  it('<Display /> should render', () => {
    render(<Display />);
  });
});
