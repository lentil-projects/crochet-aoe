import './App.css';
import {useState, useEffect} from 'react';
import {getLeaderboard, getMatchHistory} from './services/aoe-api';
import {filterMatchHistory, getChangeInELo} from './helpers';

export const App = () => {
    const [playerInfo, setPlayerInfo] = useState({
        rating: '---',
        previous_rating: 0
    });
    const [matchHistory, setMatchHistory] = useState([]);

    useEffect(() => {
        const fetchLeaderboadInfo = async () => {
            const response = await getLeaderboard();
            return setPlayerInfo(response.leaderboard[0]);
        }
        const fetchMatchesInfo = async () => {
            const response = await getMatchHistory();
            return setMatchHistory(response);
        }
        fetchLeaderboadInfo();
        fetchMatchesInfo();
    }, []);

    return (
        <div className='page'>
            <div className='panel'>
                <h1>crochet</h1>
                <h2>elo: {playerInfo.rating} {getChangeInELo(playerInfo)}</h2>
                <p>{filterMatchHistory(matchHistory)}</p>
                <p>streak: {playerInfo.streak}</p>
            </div>
        </div>
    );
};