import React from 'react';
import { withRouter } from 'react-router-dom';

import { Auth, checkAuth } from 'Client/Auth';

import ContentWrap from 'Containers/ContentWrap';
import Header from 'Components/Header';
import Sidebar from 'Components/Sidebar';
import Routes from 'Routes';
import ModalContainer from 'Containers/ModalContainer';
import CastPlayer from 'Components/CastPlayer';

import { AppWrap } from './Styles';
import GlobalStyles from '../Styles/GlobalStyles';

const App = () => {
    checkAuth();

    const LoggedIn = () => (
        <>
            <Sidebar />
            <ContentWrap>
                <>
                    <Header />
                    <Routes />
                </>
            </ContentWrap>
            <ModalContainer />
            <CastPlayer />
        </>
    );

    return (
        <AppWrap authed={Auth.isAuthenticated}>
            <GlobalStyles />
            {Auth.isAuthenticated ? (
                <LoggedIn />
            ) : (
                <>
                    <Routes />
                    <CastPlayer />
                </>
            )}
        </AppWrap>
    );
};

export default withRouter(App);
