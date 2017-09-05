import { h } from 'preact';

import render from 'preact-render-to-string';

import MainTitle from './MainTitle.jsx';

describe('Given a MainTitle component', () => {
  it('should render correctly', () => {
    const tree = render(<MainTitle />);

    expect(tree).toMatchSnapshot();
  });
});
