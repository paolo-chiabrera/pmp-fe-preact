import { compose, lifecycle } from 'recompose';
import { connect } from 'preact-redux';
import { bindActionCreators } from 'redux';

import { getImage } from '../../actions';

import Image from './Image';

export const mapStateToProps = state => {
    const { currentImage } = state;

    return {
        image: currentImage
    }
};

export const mapDispatchToProps = dispatch => bindActionCreators({ getImage }, dispatch);

const lifecycleMethods = {
    componentDidMount() {
        const {
            filename,
            getImage
        } = this.props;

        getImage({ filename });
    }
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    lifecycle(lifecycleMethods)
)(Image);