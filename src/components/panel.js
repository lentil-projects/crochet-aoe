import {getChangeInELo, getLastMatchTime} from '../helpers';
import {StyledPanel} from '../styled-components/panel';
import {PanelHeader} from '../styled-components/panel-header';

export const Panel = props => {
    const {playerInfo, matchHistory, loading, title} = props;
    return (
        <StyledPanel>
            {title && <PanelHeader title={title}/>}
            <div className='content'>
            <h1>crochet 🧶</h1>
            {!loading ? (
                <>
                    <p>last match: {getLastMatchTime(matchHistory)}</p>
                    <h2>elo: {playerInfo.rating} {getChangeInELo(playerInfo)}</h2>
                    <p>shout out new followers:</p>
                    <marquee>Beige15, irl_goblin, and zebeastgg!</marquee>
                    <br/>
                    <marquee>iwillhealyou12 and themetalgladiator!</marquee>
                    <br/>
                    <marquee>gadzookzzz!</marquee>
                </>
            ) : 'loading'}
            </div>
        </StyledPanel>
    )
};