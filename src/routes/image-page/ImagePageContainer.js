import { branch, compose, lifecycle, renderNothing } from 'recompose';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { isEmpty } from 'lodash';

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
    const { getImage, match } = this.props;

    getImage({ filename: match.params.filename });
  }
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(lifecycleMethods),
  branch(({ image }) => isEmpty(image), renderNothing)
)(ImagePage);
