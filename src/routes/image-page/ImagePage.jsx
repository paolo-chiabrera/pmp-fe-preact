import { h } from 'preact';
import { Link } from 'react-router-dom';

import Image from '../../components/image';

export default function ImagePage({ filename, history, image }) {
  const onClick = () => {
    history.goBack();
  };

  return (
    <div class="page image-page">
      <div class="back-layer" onClick={onClick} />
      <Image image={image} key={filename} />
    </div>
  );
}
