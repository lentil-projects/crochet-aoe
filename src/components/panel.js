import styled from 'styled-components';
import {filterMatchHistory, getChangeInELo, getLastMatchTime} from '../helpers';
import {StyledPanel} from '../styled-components/panel';

export const Panel = props => {
    const {playerInfo, matchHistory, loading} = props;
    return (
        <StyledPanel>
            <h1>crochet</h1>
            {!loading ? (
                <>
                    <p>last match: {getLastMatchTime(matchHistory)}</p>
                    <h2>elo: {playerInfo.rating} {getChangeInELo(playerInfo)}</h2>
                    <br/>
                    <p>shout out new followers: <span>🚶🚶🚶</span></p>
                    <marquee>Beige15, irl_goblin, and zebeastgg!</marquee>
                </>
            ) : 'loading'}
        </StyledPanel>
    )
};