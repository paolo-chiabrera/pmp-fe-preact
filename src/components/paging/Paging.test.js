import { h } from 'preact';

import render from 'preact-render-to-string';

import { StaticRouter } from 'react-router';

import Paging from './Paging.jsx';

describe('Given a Paging component', () => {
  describe('When the page is 0', () => {
    it('should render correctly', () => {
      const tree = render(
        <StaticRouter location="/pages/0">
          <Paging pageNumber={0} />
        </StaticRouter>
      );

      expect(tree).toMatchSnapshot();
    });
  });

  describe('When the page is 1', () => {
    it('should render correctly', () => {
      const tree = render(
        <StaticRouter location="/pages/1">
          <Paging pageNumber={1} />
        </StaticRouter>
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
