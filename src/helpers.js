export const filterMatchHistory = history => {
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

export const getChangeInELo = ({rating, previous_rating}) => {
    if (!previous_rating) return '(--)';
    const change = rating - previous_rating;
    const symbol = change > 0 ? '📈' : '📉';
    return `(${change}) ${symbol}`;
}