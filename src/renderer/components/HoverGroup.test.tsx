import { render } from '@testing-library/react';
import { HoverGroup } from './HoverGroup';

describe('renderer/components/HoverGroup.tsx', () => {
  it('should render', () => {
    const tree = render(<HoverGroup>Hover Group</HoverGroup>);
    expect(tree).toMatchSnapshot();
  });
});
