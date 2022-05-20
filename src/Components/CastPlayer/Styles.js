import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { media } from 'Styles/Utils';
import { HeadingFourStyle } from 'Styles/Base';

export const CastPlayerWrap = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    background: #1a1d2a;
    width: 100%;
    z-index: 98;
    height: ${(props) => props.theme.layout.playerMobile};
    padding: 1rem 2rem 1rem 2rem;
    display: flex;
    flex-wrap: wrap;

    ${media.tablet`
        padding: 1rem 2rem 1rem 14rem;
        height: ${(props) => props.theme.layout.player};
    `}
`;

export const CastingInfo = styled.div`
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: center;

    img {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        width: 12rem;
        padding: 1rem;
        background: #1a1d2a;
        display: none;

        ${media.tablet`
            display:block;
        `}
    }

    h4,
    h5 {
        color: ${(props) => props.theme.white};
        font-family: ${(props) => props.theme.fonts.body};
        margin-left: 0.5rem;
        font-size: ${(props) => props.theme.typography.base};
        line-height: 1.5;
    }

    h5 {
        opacity: 0.5;
        font-weight: 500;
    }

    h4 {
        font-weight: 600;
        margin: 0 0 0 0.5rem;
    }

    ${media.tablet`
        width: 30%;

        h4,
        h5 {
            text-align: left;
        }
    `}
`;

export const CastingControls = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    ${media.tablet`
        width: 40%;
    `}
`;

export const CastingVolume = styled.div`
    margin-left: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    order: 2;

    ${media.tablet`
        width: 30%;
        justify-content: flex-end;
    `}
`;

export const CastPopupOptions = styled.div`
    position: fixed;
    width: 100%;
    bottom: 10rem;
    right: 1rem;
    background: ${(props) => props.theme.dark};
    border-radius: ${(props) => props.theme.button.borderRadius};
    z-index: 98;

    ${media.tablet`
        max-width: 25rem;
    `}

    > div > div {
        margin: 0;
    }
`;

export const SubtitleToggle = styled(FontAwesomeIcon)`
    color: ${(props) => props.theme.white};
    ${HeadingFourStyle}
    height: 3rem;
    width: 5rem;
    margin-right: 1.5rem;
    cursor: pointer;
    opacity: 0.6;
    transition: ${(props) => props.theme.base.transitionSpeed} opacity;

    &:hover {
        opacity: 1;
    }
`;
