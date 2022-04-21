import React, { Component } from 'react';
import { compose } from 'lodash/fp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactToolTip from 'react-tooltip';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Logout from './Logout';
import NavToggle from './NavToggle';
import Search from './Search';

import { HeaderWrap, BackButton, BackIcon } from './Styles';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    updateSearch = (value) => {
        this.setState({
            value,
        });
    };

    render() {
        const { value } = this.state;
        const { history, previousLocation, currentLocation } = this.props;

        return (
            <HeaderWrap>
                <NavToggle />
                <ReactToolTip effect="solid" place="left" className="tooltip" />
                {previousLocation !== null && currentLocation !== '/dashboard' && (
                    <BackButton data-delay-show='1000' data-tip="Go Back" onClick={() => history.goBack()}>
                        <BackIcon icon={faArrowLeft} />
                    </BackButton>
                )}
                <div className="searchAutosuggest">
                    <Search value={value} updateSearch={this.updateSearch} />
                </div>

                <div className="right-menu">
                    <google-cast-launcher />
                    <Logout />
                </div>
            </HeaderWrap>
        );
    }
}

Header.propTypes = {
    history: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
    previousLocation: PropTypes.string,
    currentLocation: PropTypes.string,
};

Header.defaultProps = {
    previousLocation: '',
    currentLocation: '',
};

const mapStateToProps = (state) => {
    const { historyLocation } = state;

    return {
        previousLocation: historyLocation.previousLocation,
        currentLocation: historyLocation.currentLocation,
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps),
)(Header);
