import {filterMatchHistory, getChangeInELo, getLastMatchTime} from '../helpers';

export const Panel = props => {
    const {playerInfo, matchHistory, loading} = props;
    return (
        <div className='panel'>
            <h1>crochet</h1>
            {!loading ? (
                <>
                    <h2>elo: {playerInfo.rating} {getChangeInELo(playerInfo)}</h2>
                    <p>last match: {getLastMatchTime(matchHistory)}</p>
                    <p>{filterMatchHistory(matchHistory)}</p>
                    <p>streak: {playerInfo.streak}</p>
                </>
            ) : 'loading'}
        </div>
    )
};