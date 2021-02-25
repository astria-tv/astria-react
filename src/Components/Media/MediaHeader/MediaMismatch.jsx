import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { faWrench } from '@fortawesome/free-solid-svg-icons';

import { showModal, FIX_MISMATCH_MODAL } from 'Redux/Actions/modalActions';

import { HeaderIconWrap, HeaderIcon } from './Styles';

const FixMismatch = ({ uuid, sModal, name, file, type }) => {
    const toggleModal = () => {
        sModal(FIX_MISMATCH_MODAL, {
            uuid,
            name,
            file,
            type,
        });
    };

    return (
        <HeaderIconWrap onClick={() => toggleModal()} data-delay-show='1000' data-tip="Fix Mismatch">
            <HeaderIcon icon={faWrench} />
        </HeaderIconWrap>
    );
};

FixMismatch.propTypes = {
    sModal: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    file: PropTypes.string,
};

FixMismatch.defaultProps = {
    file: null,
};

const mapDispatchToProps = (dispatch) => ({
    sModal: (type, props) => dispatch(showModal(type, props)),
});

export default connect(
    null,
    mapDispatchToProps,
)(FixMismatch);
