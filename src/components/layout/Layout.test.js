import { h } from 'preact';

import render from 'preact-render-to-string';

import { StaticRouter } from 'react-router';

import Layout from './Layout.jsx';

describe('Given a Layout component', () => {
  it('should render correctly', () => {
    const tree = render(
      <StaticRouter location="/">
        <Layout />
      </StaticRouter>
    );

    expect(tree).toMatchSnapshot();
  });
});
