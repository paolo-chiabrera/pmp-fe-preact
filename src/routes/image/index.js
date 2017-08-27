import { h } from 'preact';

import Image from '../../components/image';

export default function ImagePage({ filename }) {
	return (
		<div class="image-page">
			<h1>Image</h1>
			<Image filename={filename} />
		</div>
	);
}
