import { h } from 'preact';
import { Link } from 'preact-router/match';

import './style.scss';

const IMAGE_SIZE = 150;

export default function ImageList({ images, pageNumber }) {
  const imagesList = images.map(image => {
    const { filename, meta: { ext, label, ratio } } = image;

    const imageWrapperStyle = {
      backgroundImage: `url(http://images.picmeplease.eu/images/${filename}.${ext})`
    };

    const flexGridItemStyle = {
      height: `${IMAGE_SIZE}px`,
      width: `${ratio * IMAGE_SIZE}px`
    };

    return (
      <div class="flex-grid-item" key={filename} style={flexGridItemStyle}>
        <Link href={`/images/${filename}`}>
          <div class="image-wrapper" style={imageWrapperStyle} key={filename}/>
        </Link>
      </div>
    );
  });

  return (
    <div class="flex-grid" key={`flex-grid-${pageNumber}`}>
      {imagesList}
    </div>
  );
}
