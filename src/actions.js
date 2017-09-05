import { IMAGE_DATA, IMAGES_DATA } from './constants';

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
