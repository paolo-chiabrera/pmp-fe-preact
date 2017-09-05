import isEmpty from 'lodash/isEmpty';

import { IMAGE_DATA, IMAGES_DATA } from './constants';

export const initialState = {
  currentImage: {},
  images: []
};

export default function reducer(state = initialState, action = {}) {
  const { payload, type } = action;

  switch (type) {
    case `${IMAGE_DATA}_FULFILLED`:
      return Object.assign({}, state, {
        currentImage: payload
      });
    case `${IMAGES_DATA}_FULFILLED`:
      return Object.assign({}, state, {
        images: payload
      });
    default:
      return isEmpty(state) ? initialState : state;
  }
}
