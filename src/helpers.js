import groupBy from 'lodash/groupBy';

const RATIOS = [
  { ratio: 1, label: '1/1', w: 1 },
  { ratio: 2, label: '2/1', w: 2 },
  { ratio: 3, label: '3/1', w: 3 }
];

export function calculateRatio(height = 0, width = 0) {
  const ratio = width / height;

  const index = RATIOS.findIndex(item => item.ratio > ratio) || 0;

  let closer = RATIOS[index];

  if (index > 0) {
    const prevDiff = Math.abs(ratio - RATIOS[index - 1]);
    const nextDiff = Math.abs(ratio - RATIOS[index]);

    closer = prevDiff > nextDiff ? RATIOS[index - 1] : RATIOS[index];
  }

  return closer;
}

export function generateGrid(images = [], gridSize = 12) {
  const totalSize = images.reduce((sum, image) => sum + image.meta.w, 0);
  const numRows = Math.ceil(totalSize / gridSize);
  const groups = groupBy(images, image => image.meta.w);

  let columnCounter = 0;

  const positionedImages = images.map((image, ind) => {
     columnCounter += image.meta.w;

    return Object.assign({}, image, { top: 0, left: 0});
  });

  console.log('totalImages', images.length);
  console.log('totalSize', totalSize);
  console.log('numRows', numRows);
  console.log('groups', groups);
}
