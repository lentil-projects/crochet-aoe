import styled from 'styled-components';
import {Panel} from '../components/panel';
import {GraphPanel} from '../components/graph-panel';

const FlexDiv = styled.div`
    display: flex;
    margin-bottom: 150px;
`;

export const Stream = props => {
    const {playerInfo, matchHistory, loading, ratingHistory} = props;

    return (
        <FlexDiv>
            <Panel playerInfo={playerInfo} matchHistory={matchHistory} loading={loading} title='crochet_aoe'/>
            <GraphPanel matchHistory={matchHistory} loading={loading} ratingHistory={ratingHistory} title='elo'/>
        </FlexDiv>
    );
};