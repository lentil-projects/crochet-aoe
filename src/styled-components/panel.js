import styled from 'styled-components';

export const StyledPanel = styled.div`
  font-family: 'IBM Plex Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-right: 20px;
  background: rgb(28, 28, 33);
  box-sizing: border-box;
  box-shadow: 5px 5px black;
  border: 2px outset rgb(25, 25, 25);
  color: rgb(191, 191, 191);

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
    font-family: 'Papyrus', cursive;
    font-size: 1.05rem;
  }

  .content {
    padding: 15px;
    margin: 5px;
    border: 2px inset rgb(25, 25, 25);
    height: 75%;
    background: rgb(28, 28, 33);
  }
`;