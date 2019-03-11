// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import Display from './Display';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';

describe('<Display />', () => {
  it('should check whether there is a class when unlocked', () => {
    const { getByText } = render(<Display />);
    const assumption = getByText(/unlocked/i);
    expect(assumption).toHaveClass('led green-led');
  });
  it('should check whether there is a class when open', () => {
    const { getByText } = render(<Display />);
    const assumption = getByText(/open/i);
    expect(assumption).toHaveClass('led green-led');
  });
  it('should check whether text is locked when locked is true', () => {
    const { getByText } = render(<Display locked={true} />);
    const assumption = getByText(/locked/i);
    expect(assumption).toBeInTheDocument();
  });
  it('should check whether text is closed when closed is true', () => {
    const { getByText } = render(<Display closed={true} />);
    const assumption = getByText(/closed/i);
    expect(assumption).toBeInTheDocument();
  });
  it('<Display /> snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  // function is firing
  // locked or unlocked
  // closed or open
});
