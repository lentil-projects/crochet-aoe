import './App.css';
import {useState, useEffect} from 'react';
import {getLeaderboard, getMatchHistory} from './services/aoe-api';
import {Panel} from './components/panel';

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
            <Panel playerInfo={playerInfo} matchHistory={matchHistory}/>
        </div>
    );
};