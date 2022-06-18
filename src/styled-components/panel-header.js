import styled from 'styled-components';

export const StyledPanelHeader = styled.div`
  height: 2.35rem;
  background: ${props => props.background ? props.background : 'navy'};
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: 1px 1px black;
  font-family: 'Courier new', serif;
`;

export const PanelHeader = props => {
    return (
        <StyledPanelHeader>{props.title}</StyledPanelHeader>
    );
};