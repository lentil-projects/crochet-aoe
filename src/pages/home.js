import {Panel} from '../components/panel';

export const Home = props => {
    const {playerInfo, matchHistory, loading} = props;

    return (
        <>
            <Panel playerInfo={playerInfo} matchHistory={matchHistory} loading={loading}/>
        </>
    );
};