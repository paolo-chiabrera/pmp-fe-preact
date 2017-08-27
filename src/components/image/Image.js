import { h } from 'preact';

export default function Image({ image }) {
	return (
		<div class="image-details">{image.filename} - {image.source}</div>
	);
}