import { h } from 'preact';

import render from 'preact-render-to-string';

import { StaticRouter } from 'react-router';

import ImageList from './ImageList.jsx';

describe('Given a ImageList component', () => {
  it('should render correctly', () => {
    const tree = render(
      <StaticRouter location="/">
        <ImageList images={[]} pageNumber={0} />
      </StaticRouter>
    );

    expect(tree).toMatchSnapshot();
  });
});
