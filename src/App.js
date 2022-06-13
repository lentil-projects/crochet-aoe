import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {getLeaderboard, getMatchHistory} from './services/aoe-api';
import {Panel} from './components/panel';
import {Home} from './pages/home';
import {Stream} from './pages/stream';

export const App = () => {
    const [loading, setLoading] = useState(true);
    const [playerInfo, setPlayerInfo] = useState({
        rating: '---',
        previous_rating: 0
    });
    const [matchHistory, setMatchHistory] = useState([]);

    useEffect(() => {
        const fetchLeaderboardInfo = async () => {
            const response = await getLeaderboard();
            return setPlayerInfo(response.leaderboard[0]);
        }
        const fetchMatchesInfo = async () => {
            const response = await getMatchHistory();
            return setMatchHistory(response);
        }
        Promise.all([
            fetchLeaderboardInfo(),
            fetchMatchesInfo()
        ]).then(() => setLoading(false));
    }, []);

    return (
        <Routes>
            <Route path='*' element={<Home playerInfo={playerInfo} matchHistory={matchHistory} loading={loading}/>}/>
            <Route path='/stream'
                   element={<Stream playerInfo={playerInfo} matchHistory={matchHistory} loading={loading}/>}/>
        </Routes>
    );
};