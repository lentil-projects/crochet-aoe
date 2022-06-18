import styled from 'styled-components';

export const StyledPanel = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-right: 20px;
  background: lightgray;
  box-sizing: border-box;
  box-shadow: 5px 5px black;
  border: 3px outset white;

  h1 {
    font-size: 3rem;
    font-weight: 800;
  }

  h2 {
    font-size: 25px;
  }

  marquee {
    background: black;
    color: white;
    font-family: 'Papyrus',serif;
    font-size: 1.05rem;
  }

  .content {
    padding: 15px;
    background: white;
    margin: 5px;
    border: 3px inset white;
    height: 75%;
  }
`;