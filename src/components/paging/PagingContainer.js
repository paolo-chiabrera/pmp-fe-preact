import { compose, lifecycle } from 'recompose';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';

import { setPage } from '../../actions';

import Paging from './Paging.jsx';

export const mapStateToProps = () => {
  return {};
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators({ setPage }, dispatch);

export default compose(connect(mapStateToProps, mapDispatchToProps))(Paging);
