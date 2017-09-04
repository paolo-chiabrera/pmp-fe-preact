import { h } from 'preact';

import ImageList from '../../components/image-list';

export default function Page({ pageNumber = 0 }) {
  return (
    <div class="image-list-page">
      <div class="image-list-container">
        <ImageList pageNumber={pageNumber} />
      </div>
    </div>
  );
}
