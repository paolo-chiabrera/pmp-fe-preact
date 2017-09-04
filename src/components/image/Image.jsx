import { h } from 'preact';

import style from './style';

export default function Image({ image }) {
  const { filename, meta: { ext }, source } = image;

  return (
    <div class="image-wrapper">
      <img
        src={`http://images.picmeplease.eu/images/${filename}.${ext}`}
        alt={filename}
      />
    </div>
  );
}
