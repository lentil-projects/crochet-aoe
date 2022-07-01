import './App.css';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import {getLeaderboard, getMatchHistory, getRatingHistory} from './services/aoe-api';
import {Home} from './pages/home';
import {Overlay} from './pages/overlay';
import overlay from './assets/overlay2.png';

const PageStyle = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-image: url(${overlay});
  padding: 50px;
`;

export const App = () => {
    const [loading, setLoading] = useState(true);
    const [playerInfo, setPlayerInfo] = useState({
        rating: '---',
        previous_rating: 0
    });
    const [matchHistory, setMatchHistory] = useState([]);
    const [ratingHistory, setRatingHistory] = useState([]);

    useEffect(() => {
        const fetchLeaderboardInfo = async () => {
            const response = await getLeaderboard();
            return setPlayerInfo(response.leaderboard[0]);
        }
        const fetchMatchesInfo = async () => {
            const response = await getMatchHistory();
            return setMatchHistory(response);
        }
        const fetchRatingHistory = async () => {
            const response = await getRatingHistory();
            console.log(response)
            return setRatingHistory(response);
        }
        Promise.all([
            fetchLeaderboardInfo(),
            fetchMatchesInfo(),
            fetchRatingHistory()
        ]).then(() => setLoading(false));
    }, []);

    const homeElement = <Home playerInfo={playerInfo} matchHistory={matchHistory} loading={loading}
                              ratingHistory={ratingHistory}/>
    const overlayElement = <Overlay playerInfo={playerInfo} matchHistory={matchHistory} loading={loading}
                                    ratingHistory={ratingHistory}/>

    return (
        <PageStyle>
            <Routes>
                <Route path='*' element={homeElement}/>
                <Route path='/overlay' element={overlayElement}/>
            </Routes>
        </PageStyle>
    );
};