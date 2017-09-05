export function nextPageNumber(pageNumber = 0) {
  const page = parseInt(pageNumber);

  return page + 1;
}

export function prevPageNumber(pageNumber = 0) {
  const page = parseInt(pageNumber);

  return page > 0 ? page - 1 : 0;
}
