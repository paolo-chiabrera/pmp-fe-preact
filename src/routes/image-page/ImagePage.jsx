import { h } from 'preact';
import { Link } from 'react-router-dom';
import Helmet from 'preact-helmet';

import Image from '../../components/image';

export default function ImagePage({ history, image, location, siteConfig }) {
  const { baseUrl, baseUrlImages } = siteConfig;
  const { filename, meta: { ext, format, height, width } } = image;

  const meta = [
    { property: 'og:url', content: `${baseUrl}${location.pathname}` },
    {
      property: 'og:image',
      content: `${baseUrlImages}/images/${filename}.${ext}`
    },
    { property: 'og:image:height', content: height },
    { property: 'og:image:width', content: width }
  ];

  const onClick = () => {
    history.goBack();
  };

  return (
    <div class="page image-page">
      <Helmet meta={meta} />
      <div class="back-layer" onClick={onClick} />
      <Image image={image} key={filename} />
    </div>
  );
}
