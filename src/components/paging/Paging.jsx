import { h } from 'preact';

import { Link } from 'preact-router/match';

export default function Paging({ pageNumber, setPage }) {
  let page = parseInt(pageNumber);

  if (!page) {
    page = 0;
  }

  const prevPage = page => (page > 0 ? page - 1 : 0);

  return (
    <div className="paging">
      <p>Current page: {page}</p>
      <Link disabled={true} href={`/pages/${prevPage(page)}`}>
        <button>Prev</button>
      </Link>
      <Link href={`/pages/${page + 1}`}>
        <button>Next</button>
      </Link>
    </div>
  );
}
