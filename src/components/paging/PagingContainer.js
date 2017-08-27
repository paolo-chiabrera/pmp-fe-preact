import { compose, lifecycle } from 'recompose';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';

import { setPage } from '../../actions';

import Paging from './Paging';

export const mapStateToProps = state => {
    const { currentPage } = state;

    return {
        currentPage
    }
};

export const mapDispatchToProps = dispatch => bindActionCreators({ setPage }, dispatch);

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Paging);