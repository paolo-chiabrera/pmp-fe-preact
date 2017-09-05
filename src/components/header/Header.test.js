import { h } from 'preact';

import render from 'preact-render-to-string';

import { StaticRouter } from 'react-router';

import Header from './Header.jsx';

describe('Given a Header component', () => {
  it('should render correctly', () => {
    const tree = render(
      <StaticRouter location="/">
        <Header />
      </StaticRouter>
    );

    expect(tree).toMatchSnapshot();
  });
});
