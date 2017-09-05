import { h } from 'preact';

export default function Image({ image }) {
  const { filename, meta: { ext } } = image;

  return (
    <div class="image-wrapper">
      <img
        src={`http://images.picmeplease.eu/images/${filename}.${ext}`}
        alt={filename}
      />
    </div>
  );
}
