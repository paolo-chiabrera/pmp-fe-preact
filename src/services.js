export function getImage({ filename }) {
  return fetch(`/api/images/${filename}`, {
    method: 'get'
  }).then(res => res.json());
}

export function getImages({ pageNumber = 0 }) {
  return fetch(`/api/pages/${pageNumber}`, {
    method: 'get'
  }).then(res => res.json());
}
