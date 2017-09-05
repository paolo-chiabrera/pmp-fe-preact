import { h } from 'preact';

import render from 'preact-render-to-string';

import CryingLogo from './CryingLogo.jsx';

describe('Given a CryingLogo component', () => {
  it('should render correctly', () => {
    const tree = render(<CryingLogo />);

    expect(tree).toMatchSnapshot();
  });
});
