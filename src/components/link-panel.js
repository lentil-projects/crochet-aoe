import styled from 'styled-components';

const LinkPanelStyle = styled.div`
    margin-bottom: 15px;
    padding: 15px;
    background: ${props => props.background};
    color: ${props => props.color};
    box-shadow: 5px 5px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid ${props => props.background};
    h1 {
        font-size: 2.5rem;
    }
    h2 {
        font-size: 1.05rem;
    }
    &:hover {
        cursor: pointer;
        box-shadow: 7px 7px black;
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