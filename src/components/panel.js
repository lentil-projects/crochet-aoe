import styled from 'styled-components';
import {filterMatchHistory, getChangeInELo, getLastMatchTime} from '../helpers';

const StyledPanel = styled.div`
    padding: 50px;
    background: lightgrey;
    box-sizing: border-box;
    box-shadow: 5px 5px black;
    height: 100%;
    h1 {
        font-size: 4rem;
    }
    h2 {
        font-size: 25px;
    }
    marquee {
        background: black;
        color: white;
    }
    span {
        background: hotpink;
        font-size: 2rem;
    }
`;

export const Panel = props => {
    const {playerInfo, matchHistory, loading} = props;
    return (
        <StyledPanel>
            <h1>crochet</h1>
            {!loading ? (
                <>
                    <h2>elo: {playerInfo.rating} {getChangeInELo(playerInfo)}</h2>
                    <p>last match: {getLastMatchTime(matchHistory)}</p>
                    <p>{filterMatchHistory(matchHistory)}</p>
                    <p>streak: {playerInfo.streak}</p>
                    <p>shout out new followers: <span>🚶🚶🚶</span></p>
                    <marquee>Beige15, irl_goblin, and zebeastgg!</marquee>
                </>
            ) : 'loading'}
        </StyledPanel>
    )
};