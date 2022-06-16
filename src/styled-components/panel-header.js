import styled from 'styled-components';

const StyledPanelHeader = styled.div`
    height: 2.35rem;
    background: navy;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 1.15rem;
`;

export const PanelHeader = props => {
    return (
        <StyledPanelHeader>{props.title}</StyledPanelHeader>
    );
};