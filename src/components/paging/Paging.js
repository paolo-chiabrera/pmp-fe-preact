import { h } from 'preact';

export default function Paging({ currentPage, setPage }) {
	return (
		<div class="paging">
            <p>Current page: {currentPage}</p>
            <button onClick={() => setPage(currentPage-1)}>Prev</button>
            <button onClick={() => setPage(currentPage+1)}>Next</button>
        </div>
	);
}