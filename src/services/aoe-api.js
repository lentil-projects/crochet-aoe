import axios from "axios";
import {LEADERBOARD_URL, MATCHES_URL} from "../constants/urls";

export const getLeaderboard = async () => await axios.get(LEADERBOARD_URL).then(res => res.data);
export const getMatchHistory = async () => await axios.get(MATCHES_URL).then(res => res.data);