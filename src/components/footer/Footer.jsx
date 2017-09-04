import { h } from 'preact';
import Match from 'preact-router/match';

import Paging from '../paging';

function test({ matches, path, url }) {
  console.log(matches, path, url, arguments);

  return null;
}

export default function Footer({ pageNumber }) {
  return (
    <footer>
      <Match path="/pages/:pageNumber">
        { test }
      </Match>
      <Paging pageNumber={pageNumber} />
    </footer>
  );
}