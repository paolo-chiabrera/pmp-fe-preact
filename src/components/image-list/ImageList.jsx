import { h } from 'preact';
import { Link } from 'react-router-dom';

import LazyLoader from '../lazy-loader';

const IMAGE_SIZE = 150;

export default function ImageList({ images, pageNumber }) {
  const imagesList = images.map(image => {
    const { filename, meta: { ext, label, ratio } } = image;

    const flexGridItemStyle = {
      height: `${IMAGE_SIZE}px`,
      width: `${ratio * IMAGE_SIZE}px`
    };

    const imageWrapperStyle = {
      backgroundImage: `url(http://images.picmeplease.eu/images/${filename}_300.${ext})`
    };

    return (
      <div
        class="flex-grid-item"
        key={`flex-grid-item-${filename}`}
        style={flexGridItemStyle}
      >
        <LazyLoader container="page-wrapper" id={filename} size={IMAGE_SIZE}>
          <Link to={`/images/${filename}`}>
            <div
              class="image-wrapper"
              style={imageWrapperStyle}
              key={filename}
            />
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