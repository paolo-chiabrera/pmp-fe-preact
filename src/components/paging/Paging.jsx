import { h } from 'preact';
import { Link } from 'react-router-dom';

import { nextPageNumber, prevPageNumber } from '../../helpers';

export default function Paging({ pageNumber = 0 }) {
  return (
    <div class="paging over-footer">
      <Link to={`/pages/${prevPageNumber(pageNumber)}`}>
        <div class="icon-arrow-left" />
      </Link>
      <div class="current">{pageNumber}</div>
      <Link to={`/pages/${nextPageNumber(pageNumber)}`}>
        <div class="icon-arrow-right" />
      </Link>
    </div>
  );
}
