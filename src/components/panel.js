import {filterMatchHistory, getChangeInELo} from '../helpers';

export const Panel = props => {
    const {playerInfo, matchHistory} = props;
    return (
        <div className='panel'>
            <h1>crochet</h1>
            <h2>elo: {playerInfo.rating} {getChangeInELo(playerInfo)}</h2>
            <p>{filterMatchHistory(matchHistory)}</p>
            <p>streak: {playerInfo.streak}</p>
        </div>
    )
}