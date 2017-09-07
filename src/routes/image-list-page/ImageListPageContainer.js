import { compose, lifecycle, withProps } from 'recompose';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import { get, isEmpty } from 'lodash';

import { getImages } from '../../actions';

import { nextPageNumber, prevPageNumber } from '../../helpers';

import ImageListPage from './ImageListPage.jsx';

export const mapStateToProps = state => {
  const { images, siteConfig } = state;

  return {
    images,
    siteConfig
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ getImages }, dispatch);

const lifecycleMethods = {
  componentDidMount() {
    const { getImages, pageNumber } = this.props;

    getImages({ pageNumber });
  },
  componentWillReceiveProps({ pageNumber }) {
    if (this.props.pageNumber === pageNumber) {
      return;
    }

    this.props.getImages({ pageNumber });
  }
};

const withPropsMapper = ({ history, location, match }) => {
  const pageNumber = get(match, 'params.pageNumber', 0);

  const goNextPage = () => history.push(`/pages/${nextPageNumber(pageNumber)}`);
  const goPrevPage = () => history.push(`/pages/${prevPageNumber(pageNumber)}`);

  return {
    goNextPage,
    goPrevPage,
    pageNumber
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withProps(withPropsMapper),
  lifecycle(lifecycleMethods)
)(ImageListPage);
