import { isEmpty } from 'lodash/core';

import { IMAGE_DATA, IMAGES_DATA, SET_PAGE } from './constants';

export const initialState = {
  currentImage: {},
  currentPage: 0,
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
    case SET_PAGE:
      return Object.assign({}, state, {
        currentPage: payload
      });
    default:
      return isEmpty(state) ? initialState : state;
  }
}
