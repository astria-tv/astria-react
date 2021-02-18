import styled from 'styled-components';
import DropdownMenu from 'Components/DropdownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { media } from 'Styles/Utils';
import { aFadeIn } from 'Styles/Animations';

export const CloseVideo = styled(FontAwesomeIcon)`
    position: absolute;
    top: 0;
    right: 0.5rem;
    color: #fff;
    font-size: 1.6rem;
    cursor: pointer;
    z-index: 11;
    transition: 0.2s all;
    opacity: 0.9;
    width: 5rem !important;
    height: 5rem;
    padding: 1.5rem;

    &:hover {
        opacity: 1;
    }
`;

export const DisabledIcon = styled(FontAwesomeIcon)`
    color: rgba(255,255,255,0.25);
    pointer-events: none;
`;

export const Link = styled.button`
    background: none;
    border: 0;
    color: #fff;
    font-size: 2rem;
    opacity: 0.8;

    &:disabled {
        pointer-events: none;
        color: rgba(255,255,255,0.25);
    }
`;

export const MediaNavigation = styled.div`
    width: 4rem;
    height: 2.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const VideoWrap = styled.article`
    position: fixed;
    padding: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background: #00000090;
    width: 100%;
    animation: 0.4s ${aFadeIn} alternate;
`;

export const MediaFull = styled.article`
    width: 100%;
    float: left;
    position: relative;
    z-index: 5;
    display: flex;
`;

export const MediaInfo = styled.div`
    float: left;
    width: 100%;
    display: block;
    position: relative;
    margin: 0 0 1rem;

    ${media.mobile`
    display:flex;
  `}
`;

export const MediaInfoList = styled.ul`
    margin: 0;
    padding: 0;

    li {
        display: inline-block;
        color: #fff;
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 2rem;
        transform: tranzslateY(-0.05rem);
        text-transform: uppercase;
        margin-right: 0.5rem;
        padding-right: 0.5rem;

        &:last-child {
            margin: 0;
            padding: 0;
            border: 0;
        }
    }
`;

export const MediaInfoSubhead = styled.span`
  text-transform:uppercase;
  color: #FFF;
  opacity:.5;
  font-size:1.1rem;
  font-weight:600;
  line-height:2rem
  letter-spacing:.1rem;
  float:left;
  width:100%;
  margin:0 0 .5rem 0;
  min-width: 7.2rem;

  ${media.mobile`
    float:none;
    margin:0 1.5rem 0 0;
    width:auto;
  `}
`;

export const DropdownIcon = styled(FontAwesomeIcon)`
    color: #fff;
    font-size: 1.4rem;
    height: 2rem;
`;

export const FileName = styled.p`
    color: #fff;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2rem;
    transform: translateY(-0.05rem);
    white-space: pre-wrap;
    word-break: break-all;
    float: left;
    width: 100%;
    height: 2rem;
    overflow: hidden;
`;

export const SelectStyle = {
    container: (base) => ({
        ...base,
        flex: 1,
        width: '100%',
        float: 'left',
    }),
    option: (base, { isDisabled, isFocused, isSelected }) => ({
        ...base,
        cursor: 'pointer',
        backgroundColor: '#191927 !important',
        transition: '.2s all',
        color: isSelected || isFocused ? '#FF9B3D' : '#FFF',
        opacity: isDisabled ? 0.2 : 1,
    }),
    control: () => ({
        width: 'auto',
        background: 'none',
        cursor: 'pointer',
        color: '#FF9B3D',
        position: 'relative',
        float: 'left',
    }),
    menu: (base) => ({
        ...base,
        width: 'auto',
        borderRadius: '0',
        overflow: 'hidden',
        cursor: 'pointer',
    }),
    menuList: (base) => ({
        ...base,
        padding: '1rem',
        backgroundColor: '#191927 !important',
        margin: '0',
        fontSize: '1.4rem',
        fontWeight: '600',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
        overflow: 'hidden',
        lineHeight: '2rem',
        border: 'none',
    }),
    valueContainer: () => ({
        fontWeight: 600,
        fontSize: '1.4rem',
        lineHeight: '2rem',
        padding: 0,
        height: '2rem',
        float: 'left',
        display: 'inline-block',
    }),
    dropdownIndicator: (base) => ({
        ...base,
        padding: 0,
        marginLeft: '1rem',
        color: '#FF9B3D',
        height: '1.6rem',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    singleValue: () => ({
        color: '#FFF',
        margin: 0,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
        overflow: 'hidden',
        height: '2rem',
    }),
};

// Media Info
export const MediaInfoWrap = styled.div`
    float: left;
    width: 100%;
`;

export const MediaDetails = styled.ul`
    float: left;
    width: 100%;
    margin: 0 0 2rem;
    list-style-type: none;

    li {
        font-size: 1.4rem;
        display: inline-block;
        padding-right: 1rem;
        margin-right: 1rem;
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        font-weight: 600;
        color: ${(props) => props.theme.secondary};

        &:last-child {
            border-right: 0;
        }

        &:nth-child(2) {
            color: ${(props) => (props.watched ? props.theme.secondary : props.theme.primary)};
        }

        &.warning {
            color: ${(props) => props.theme.alerts.error};
            cursor: pointer;
            font-weight: 700;
        }
    }
`;

// Media Actions
export const MediaActionsDropdown = styled(DropdownMenu)`
    position: absolute;
    top: 0;
    right: 0;
`;

export const MediaActionsWrap = styled.div`
    float: left;
    width: 100%;
    margin-top: 2rem;

    button {
        margin: 0 1rem 1rem 0;
        width: 100%;
        border: 0;
        line-height: 4rem;
        padding: 0 1.5rem;
        border-radius: 0.2rem;
        font-size: 1.4rem;
        color: #fff;
        font-weight: 600;
        background: ${(props) => props.theme.dark};
        transition: 0.2s all;
        cursor: pointer;

        &:hover {
            background: ${(props) => props.theme.darken.dark};
        }

        ${media.mobile`
      width:auto;
      margin:0 1rem 0 0;
    `}
    }
`;

export const LibraryUnhealthy = styled(FontAwesomeIcon)`
    color: ${(props) => props.theme.alerts.error};
    font-size: 1.1rem;
    height: 1em;
    margin-right: 0.7rem;
`;
