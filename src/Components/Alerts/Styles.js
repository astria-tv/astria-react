import styled from 'styled-components';

const getColor = (props) => {
    switch (props.type) {
        case 'error':
            return props.theme.alerts.error;
        case 'info':
            return props.theme.alerts.info;
        case 'success':
            return props.theme.alerts.success;
        default:
            return 'black';
    }
};

export const AlertInlineWrap = styled.span`
    float: left;
    width: 100%;
    color: ${(props) => getColor(props)};
    border: ${(props) => (props.type === 'info' ? 'none' : `1px solid ${getColor(props)}`)};
    background: ${(props) => (props.type === 'info' ? 'rgb(21, 22, 35)' : 'rgb(22, 22, 34)')};
    line-height: 2.4rem;
    font-size: 1.4rem;
    padding: 1rem 1.5rem;
    border-radius: 0.3rem;
    text-align: center;
    margin: 0 0 1rem;
    font-weight: 400;
`;

export const AlertConfirmWrap = styled.span`
    float: left;
    width: 100%;
    color: ${(props) => getColor(props)};
    border: ${(props) => (props.type === 'info' ? 'none' : `1px solid ${getColor(props)}`)};
    background: ${(props) => (props.type === 'info' ? 'rgb(21, 22, 35)' : 'rgb(22, 22, 34)')};
    line-height: 2.4rem;
    font-size: 1.4rem;
    border-radius: 0.3rem;
    text-align: center;
    margin: 0 0 1rem;
    font-weight: 400;
    display: flex;
    justify-content: space-between;

    p {
        padding: 1rem 1.5rem;
        display: inline-block;
        float: left;
    }

    button {
        float: left;
        border-radius: 0 0.3rem 0.3rem 0;
        border: 0;
        padding: 0 2rem;
        color: white;
        background: ${(props) => getColor(props)};
    }
`;

export const AlertWrap = styled.div`
    background: #fff;
    margin: 0 3rem 3rem;
    padding: 3rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    position: relative;
    max-width: 40rem;
`;

export const AlertType = styled.strong`
    color: ${(props) => getColor(props)};
    margin-right: 0.5rem;
    font-weight: 600;
    font-size: 1.4rem;
    &:after {
        content: ':';
    }
`;

export const AlertMessage = styled.p`
    color: ${({ theme }) => theme.text};
    font-weight: 600;
    line-height: 1.75;
    display: inline-block;
    padding-left: 5rem;
    font-size: 1.4rem;
    letter-spacing: 0.05rem;
`;

export const IconWrap = styled.span`
    position: absolute;
    top: 50%;
    left: 3rem;
    margin-top: -1.6rem;
`;

export const Close = styled.span`
    position: absolute;
    top: 1.3rem;
    right: 1.5rem;
    font-size: 1.4rem;
    cursor: pointer;
    color: ${({ theme }) => theme.secondary};
    transition: 0.2s all;
    opacity: 0.5;

    &:hover {
        opacity: 1;
        color: rgba(0, 0, 0, 1);
    }
`;
