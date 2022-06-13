import {Panel} from '../components/panel';
import {LinkPanel} from '../components/link-panel';
import {github, twitch} from '../constants/links';
import styled from 'styled-components';

const FlexDiv = styled.div`
    display: flex;
    margin-bottom: 150px;
`;

const LinkDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Home = props => {
    const {playerInfo, matchHistory, loading} = props;

    return (
        <FlexDiv>
            <Panel playerInfo={playerInfo} matchHistory={matchHistory} loading={loading}/>
            <LinkDiv>
                <LinkPanel link={twitch}/>
                <LinkPanel link={github}/>
            </LinkDiv>
        </FlexDiv>
    );
};