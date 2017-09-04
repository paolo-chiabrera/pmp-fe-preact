import { branch, compose, lifecycle, renderNothing } from 'recompose';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash/core';

import { getImage } from '../../actions';

import ImagePage from './ImagePage.jsx';

export const mapStateToProps = state => {
  const { currentImage } = state;

  return {
    image: currentImage
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ getImage }, dispatch);

const lifecycleMethods = {
  componentDidMount() {
    const { filename, getImage } = this.props;

    getImage({ filename });
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(lifecycleMethods),
  branch(({ image }) => isEmpty(image), renderNothing)
)(ImagePage);
