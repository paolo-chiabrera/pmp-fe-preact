import { h } from 'preact';
import Helmet from 'preact-helmet';
import Swipeable from 'react-swipeable';

import ImageList from '../../components/image-list';
import Paging from '../../components/paging';

export default function ImageListPage({
  goNextPage,
  goPrevPage,
  images,
  location,
  pageNumber,
  siteConfig
}) {
  const { baseUrl } = siteConfig;

  const meta = [
    { property: 'og:url', content: `${baseUrl}${location.pathname}` },
    {
      property: 'og:image',
      content: `${baseUrl}/assets/preview.jpg`
    },
    { property: 'og:image:type', content: `image/jpeg` },
    { property: 'og:image:height', content: 315 },
    { property: 'og:image:width', content: 851 }
  ];

  return (
    <div class="page image-list-page">
      <Helmet meta={meta} />
      <Swipeable onSwipedLeft={goNextPage} onSwipedRight={goPrevPage}>
        <div class="image-list-container">
          <ImageList images={images} pageNumber={pageNumber} />
        </div>
      </Swipeable>
      <Paging pageNumber={pageNumber} />
    </div>
  );
}
