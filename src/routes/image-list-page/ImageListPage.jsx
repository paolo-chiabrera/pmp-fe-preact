import { h } from 'preact';
import Swipeable from 'react-swipeable';

import ImageList from '../../components/image-list';
import Paging from '../../components/paging';

export default function ImageListPage({
  goNextPage,
  goPrevPage,
  images,
  pageNumber
}) {
  return (
    <div class="page image-list-page">
      <Swipeable onSwipedLeft={goNextPage} onSwipedRight={goPrevPage}>
        <div class="image-list-container">
          <ImageList images={images} pageNumber={pageNumber} />
        </div>
      </Swipeable>
      <Paging pageNumber={pageNumber} />
    </div>
  );
}
