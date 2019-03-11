// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Controls from './Controls';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';
const mock = jest.fn();

describe('<Controls />', () => {
  it('should check if button is disabled', () => {
    const { getByText } = render(<Controls locked={false} closed={false} />);
    const assumption = getByText(/lock gate/i);
    expect(assumption).toBeDisabled();
  });
  it('should check if button if enabled', () => {
    const { getByText } = render(<Controls locked={true} closed={false} />);
    const assumption = getByText(/close gate/i);
    expect(assumption).toBeDisabled();
  });
  it('should check if toggleClosed was fired', () => {
    const { getByText } = render(
      <Controls toggleClosed={mock} locked={false} closed={false} />
    );
    const assumption = getByText(/close gate/i);
    fireEvent.click(assumption);

    expect(mock).toHaveBeenCalled();
  });
  it('should check if toggleLocked was fired', () => {
    const { getByText } = render(
      <Controls toggleLocked={mock} locked={false} closed={false} />
    );
    const assumption = getByText(/lock gate/i);
    fireEvent.click(assumption);

    expect(mock).toHaveBeenCalled();
  });
});
