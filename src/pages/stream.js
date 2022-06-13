import {Panel} from '../components/panel';
import styled from 'styled-components';

const FlexDiv = styled.div`
    display: flex;
    margin-bottom: 150px;
`;

export const Stream = props => {
    const {playerInfo, matchHistory, loading} = props;

    return (
        <FlexDiv>
            <Panel playerInfo={playerInfo} matchHistory={matchHistory} loading={loading}/>
        </FlexDiv>
    );
};