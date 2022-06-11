import './App.css';
import axios from "axios";
import {useState, useEffect} from 'react';

export const App = () => {
    const aoeUrl = 'https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=3&steam_id=76561198362289584';
    const [playerInfo, setPlayerInfo] = useState({
        rating: '---',
        previous_rating: 0
    });

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(aoeUrl).then(res => res.data);
            console.log(response)
            return setPlayerInfo(response.leaderboard[0]);
        }
        fetch();
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
            </div>
        </div>
    );
};