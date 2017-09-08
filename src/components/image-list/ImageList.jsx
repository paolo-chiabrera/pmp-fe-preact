import { h } from 'preact';
import { Link } from 'react-router-dom';

import LazyLoader from '../lazy-loader';

import RandomLetter from '../random-letter';

export default function ImageList({ images, pageNumber }) {
  const imagesList = images.map(image => {
    const { filename, meta: { ext, label, ratio } } = image;

    const imageWrapperStyle = {
      backgroundImage: `url(http://images.picmeplease.eu/images/${filename}_300.${ext})`
    };

    const itemClass = `flex-grid-item size-${ratio}`;

    return (
      <div class={itemClass} key={`flex-grid-item-${filename}`}>
        <RandomLetter />
        <LazyLoader container="page-wrapper" id={filename}>
          <Link to={`/images/${filename}`}>
            <div class="image-wrapper" style={imageWrapperStyle} />
          </Link>
        </LazyLoader>
      </div>
    );
  });

  return (
    <div class="flex-grid" key={`flex-grid-${pageNumber}`}>
      {imagesList}
    </div>
  );
}
