import React from 'react';
import { ColoredLineLoader } from 'lib';
import { render } from '../../utils';

describe('<ColoredLineLoader />', () => {
  it('should render a line loader', () => {
    const { container } = render(<ColoredLineLoader colorId="P10" />);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('should render a 30% complete line loader', () => {
    const { getByTestId } = render(<ColoredLineLoader colorId="P10" data-testid="lineLoader" percent={30} />);
    const lineLoader = getByTestId('lineLoader');
    expect(lineLoader?.style.getPropertyValue('--line-loader-left')).toBe('0%');
    expect(lineLoader?.style.getPropertyValue('--line-loader-right')).toBe('40%');
  });
});
