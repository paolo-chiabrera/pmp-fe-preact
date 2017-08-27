import { compose, lifecycle } from 'recompose';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';

import { getImages } from '../../actions';

import ImageList from './ImageList';

export const mapStateToProps = state => {
    const { currentPage, images } = state;

    return {
        currentPage,
        images
    }
};

export const mapDispatchToProps = dispatch => bindActionCreators({ getImages }, dispatch);

const lifecycleMethods = {
    componentDidMount() {
        const {
            currentPage,
            getImages
        } = this.props;

        getImages({ pageNumber: currentPage });
    },
    componentWillReceiveProps({ currentPage }) {
        if (this.props.currentPage === currentPage) {
            return;
        }

        this.props.getImages({ pageNumber: currentPage });
    }
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    lifecycle(lifecycleMethods)
)(ImageList);