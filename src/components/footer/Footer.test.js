import { h } from 'preact';

import render from 'preact-render-to-string';

import Footer from './Footer.jsx';

describe('Given a Footer component', () => {
  it('should render correctly', () => {
    const tree = render(<Footer />);

    expect(tree).toMatchSnapshot();
  });
});
