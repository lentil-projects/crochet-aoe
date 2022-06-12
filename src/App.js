import './App.css';
import axios from "axios";
import {useState, useEffect} from 'react';

const filterMatchHistory = history => {
    const array = [];
    history = history.filter(match => match.name === 'AUTOMATCH');
    history.map(match => {
        const result = Object.values(match.players).filter(obj => obj.name === 'crochet')[0].won;
        if (result) {
            array.push('✅');
        } else array.push('❌');
    })
    return array.reverse();
};

export const App = () => {
    const aoeUrl = 'https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=3&steam_id=76561198362289584';
    const matchesUrl = 'https://aoe2.net/api/player/matches?game=aoe2de&steam_id=76561198362289584&count=15';
    const [playerInfo, setPlayerInfo] = useState({
        rating: '---',
        previous_rating: 0
    });
    const [matchHistory, setMatchHistory] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(aoeUrl).then(res => res.data);
            return setPlayerInfo(response.leaderboard[0]);
        }
        const fetch2 = async () => {
            const response = await axios.get(matchesUrl).then(res => res.data);
            return setMatchHistory(response);
        }
        fetch();
        fetch2();
    }, []);

    const getChangeInELo = () => {
        const {rating, previous_rating} = playerInfo
        if (!previous_rating) return '(--)';
        const change = rating - previous_rating;
        const symbol = change > 0 ? '📈' : '📉';
        return `(${change}) ${symbol}`;
    }

    return (
        <div className='page'>
            <div className='panel'>
                <h1>crochet</h1>
                <h2>elo: {playerInfo.rating} {getChangeInELo()}</h2>
                <p>{filterMatchHistory(matchHistory)}</p>
                <p>streak: {playerInfo.streak}</p>
            </div>
        </div>
    );
};