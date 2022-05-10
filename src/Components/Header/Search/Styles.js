import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { rgba, transparentize } from 'polished';
import { media } from 'Styles/Utils';
import { placeholder } from '../../Media/Card/Placeholder';

export const SearchIcon = styled(FontAwesomeIcon)`
    font-size: 1.6rem;
    transition: 0.2s all;
    border-radius: 50%;
    height: ${(props) => props.theme.layout.header};
    width: ${(props) => props.theme.layout.header} !important;
    padding: 1.75rem;
    color: ${(props) =>
        props.hasFocus ? 'rgba(255,255,255,.8)' : 'rgba(255,255,255,.5)'};
`;

export const InputWrap = styled.div`
    background: transparent;
    margin: 0;
    height: 5rem;
    width: 100%;
    border-radius: 0.2rem;
    transition: 0.2s all;
    position: relative;
    position: relative;
    float: left;
    background: ${(props) =>
        props.hasFocus
            ? props.theme.background
            : transparentize(0.5, props.theme.text)};
    border-radius: 5rem;
    overflow: hidden;

    ${SearchIcon} {
        background: ${(props) =>
            props.hasFocus ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0)'};
    }

    ${media.desktop`

  `}
`;

export const LoadingIcon = styled(FontAwesomeIcon)`
    color: rgba(255, 255, 255, 0.3);
    font-size: 1.6rem;
    transition: 0.2s all;
    position: absolute;
    top: 50%;
    margin-top: -0.8rem;
    right: 3.6rem;
    pointer-events: none;
    transition: 0.2s all;
    opacity: 1;
`;

export const ClearButton = styled(LoadingIcon)`
    pointer-events: all;
    right: 1.7rem;
    cursor: pointer;
`;

export const ErrorAlert = styled.span`
    display: block;
    width: 100%;
    line-height: 3rem;
    color: ${(props) => props.theme.darken.dark};
    text-align: center;
    font-weight: 800;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    text-transform: uppercase;
    padding: 0 1.5rem;
    border-radius: 0.2rem;
    border: 0.3rem solid #fff;
    background: #fff;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 6rem;
    left: 0;
`;

export const Title = styled.h4`
    padding: 1.5rem;
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: ${(props) => rgba(props.theme.secondary, 0.25)};
`;

export const NoResultsError = styled.span`
    pointer-events: none;
    display: block;
    width: 100%;
    line-height: 3rem;
    color: ${(props) => rgba(props.theme.light, 0.6)};
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-size: 1.4rem;
    border-radius: 0.3rem;
    letter-spacing: 0.1rem;
    padding: 1.5rem;
    background: #1e1f2c;
    position: absolute;
    z-index: 99;
    top: 6rem;
    left: 0;
`;

export const Suggestion = styled.article`
    float: left;
    width: 100%;
    height: 7rem;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    position: relative;
    padding-left: 5.5rem;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s background;

    ${props => props.type === 'Link' && css`
        height: 4rem;
        padding-left: 0;
        padding-right: 0;
        text-align: center;
        background: rgba(0,0,0,0.2);

        ${Name} {
            margin: 0;
            padding-right: 0;
            transition: 0.2s color;
        }

        &:hover {
            ${Name} {
                color: #fff;
            }
        }
    `}

    &:hover {
        background: rgba(0,0,0,0.2);
    }
`;

export const Name = styled.span`
    color: rgba(255, 255, 255, 0.5);
    float: left;
    width: 100%;
    font-size: 1.4rem;
    padding-right: 2rem;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    overflow: hidden;
    margin: 0 0 0.2rem;
`;

export const Year = styled.small`
  float:left;
  width:100%;
  text-transform:uppercase;
  font-size:1rem;
  margin-top: 0.3rem;
  font-weight:600;
  color: rgba(255, 255, 255, 0.5);
`;

export const Poster = styled.img`
    background: #191e30 url(${placeholder}) no-repeat center;
    background-size: cover;
    height: 6rem;
    padding: 0.2rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
`;
