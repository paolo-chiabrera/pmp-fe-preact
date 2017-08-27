import { h } from 'preact';
import { Link } from 'preact-router/match';

export default function ImageList({ images }) {
	const imagesList = images.map(image => {
		const { filename } = image;

		return (
			<Link href={ `/images/${filename}` }>
				<li>{ filename }</li>
			</Link>
		);
	});

	return (
		<ul class="image-list">
			{ imagesList }
		</ul>
	);
}