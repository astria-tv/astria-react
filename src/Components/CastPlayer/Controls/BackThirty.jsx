import React from 'react';
import PropTypes from 'prop-types';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { PlayerButtonSmall, PlayerIcon } from './Styles';

const BackThirty = ({ seek, playstate }) => (
    <PlayerButtonSmall type="button" onClick={() => seek(playstate.playtime - 30)}>
        <PlayerIcon icon={faUndo} />
    </PlayerButtonSmall>
);

BackThirty.propTypes = {
    seek: PropTypes.func.isRequired,
};

export default BackThirty;
