import {Panel} from '../components/panel';
import {LinkPanel} from '../components/link-panel';
import {github, twitch, code} from '../constants/links';
import styled from 'styled-components';
import {GraphPanel} from '../components/graph-panel';

const FlexDiv = styled.div`
    display: flex;
    margin-bottom: 150px;
    align-items: start;
`;

const LinkDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Home = props => {
    const {playerInfo, matchHistory, loading, ratingHistory} = props;

    return (
        <FlexDiv>
            <Panel playerInfo={playerInfo} matchHistory={matchHistory} loading={loading} title='crochet_aoe'/>
            <GraphPanel matchHistory={matchHistory} loading={loading} ratingHistory={ratingHistory} title='elo'/>
            <LinkDiv>
                <LinkPanel link={twitch}/>
                <LinkPanel link={github}/>
                <LinkPanel link={code}/>
            </LinkDiv>
        </FlexDiv>
    );
};