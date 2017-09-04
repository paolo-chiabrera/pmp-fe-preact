import { compose, lifecycle } from 'recompose';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';

import { getImages } from '../../actions';

import ImageList from './ImageList.jsx';

export const mapStateToProps = state => {
  const { images } = state;

  return {
    images
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ getImages }, dispatch);

const lifecycleMethods = {
  componentDidMount() {
    const { pageNumber = 0, getImages } = this.props;

    getImages({ pageNumber });
  },
  componentWillReceiveProps({ pageNumber }) {
    if (this.props.pageNumber === pageNumber) {
      return;
    }

    this.props.getImages({ pageNumber });
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(lifecycleMethods)
)(ImageList);
