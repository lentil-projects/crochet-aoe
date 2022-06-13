import styled from 'styled-components';

const LinkPanelStyle = styled.div`
    margin-left: 15px;
    margin-bottom: 15px;
    padding: 25px;
    background: ${props => props.background};
    color: ${props => props.color};
    box-shadow: 5px 5px ${props => props.color};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid ${props => props.background};
    h1 {
        font-size: 3.5rem;
    }
    h2 {
        font-size: 1.25rem;
    }
    &:hover {
        cursor: pointer;
        box-shadow: 7px 7px ${props => props.color};
`;

export const LinkPanel = props => {
    const {logo, name, background, color, link} = props.link;
    return (
        <a href={link} target='_blank' rel='noreferrer'>
            <LinkPanelStyle background={background} color={color}>
                <h1>{logo}</h1>
                <h2>{name}</h2>
            </LinkPanelStyle>
        </a>
    )
};