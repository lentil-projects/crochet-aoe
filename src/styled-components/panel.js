import styled from 'styled-components';

export const StyledPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-right: 15px;
    background: lightgray;
    box-sizing: border-box;
    box-shadow: 5px 5px black;
    border: 3px outset white;
    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 25px;
    }
    marquee {
        background: black;
        color: white;
    }
    .content {
        padding: 15px;
        background: white;
        margin: 5px;
        border: 3px inset white;
        height: 75%;
    }
`;