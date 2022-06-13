import {Panel} from '../components/panel';

export const Home = props => {
    const {playerInfo, matchHistory, loading} = props;

    return (
        <div className='page'>
            <Panel playerInfo={playerInfo} matchHistory={matchHistory} loading={loading}/>
        </div>
    );
};