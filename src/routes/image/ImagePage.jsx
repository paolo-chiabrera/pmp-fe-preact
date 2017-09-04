import { h } from 'preact';

import Image from '../../components/image';

export default function ImagePage({ filename, image }) {
  return (
    <div class="image-page">
      <Image image={image} key={filename} />
    </div>
  );
}
