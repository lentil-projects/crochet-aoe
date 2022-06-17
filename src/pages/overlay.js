import {Panel} from "../components/panel";
import {GraphPanel} from "../components/graph-panel";
import styled from 'styled-components';

const OverlayDiv = styled.div`
position: absolute;
top: 0;
left: 0;
height: 1080px;
width: 1920px;
border: 10px solid yellow;
display: flex;
align-items: center
justify-content: center;
box-sizing: border-box;
.a {
    position: absolute;
    top: 25px;
    right: 25px;
    border: solid red;
    display: flex;
}
.b{
    position: absolute;
    left: 25px;
    bottom: 25px;
    height: 550px;
    width: 975px;
    background: lightgray;
    padding: 25px;
}
`

export const Overlay = props => {
    const {playerInfo, matchHistory, loading, ratingHistory} = props;

    return (
        <OverlayDiv>
            <div className="a">
            <Panel playerInfo={playerInfo} matchHistory={matchHistory} loading={loading} title='crochet_aoe'/>
            <GraphPanel className='B' matchHistory={matchHistory} loading={loading} ratingHistory={ratingHistory} title='elo'/>
            </div>
            <div className="b">
                <PanelHeader title='age of empires'></PanelHeader>
            </div>
        </OverlayDiv>
    )
}