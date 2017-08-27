import {
  IMAGE_DATA,
  IMAGES_DATA,
  SET_PAGE
} from './constants';

import * as services from './services';

export function getImage(params) {
  return {
    type: IMAGE_DATA,
    payload: services.getImage(params)
  };
}

export function getImages(params) {
  return {
    type: IMAGES_DATA,
    payload: services.getImages(params)
  };
}

export function setPage(page = 0) {
  return {
    type: SET_PAGE,
    payload: (page > 0) ? page : 0
  };
}