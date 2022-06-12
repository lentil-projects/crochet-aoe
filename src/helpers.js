export const filterMatchHistory = history => {
    const array = [];
    history = history.filter(match => match.name === 'AUTOMATCH');
    history.map(match => {
        const result = Object.values(match.players).filter(obj => obj.name === 'crochet')[0].won;
        if (result === null) array.push('')
        else if (result) {
            array.push('✅');
        } else array.push('❌');
    })
    return array.reverse();
};

export const getChangeInELo = ({rating, previous_rating}) => {
    if (!previous_rating) return '(--)';
    const change = rating - previous_rating;
    const symbol = change > 0 ? '📈' : '📉';
    return `(${change}) ${symbol}`;
};

export const getLastMatchTime = matchHistory => {
    let date;
    if (matchHistory[matchHistory.length - 1]){
        date = new Date((matchHistory[0].finished) * 1000).toLocaleString();
    }
    return date;
};