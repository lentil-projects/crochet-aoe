import {Panel} from "../components/panel";
import {GraphPanel} from "../components/graph-panel";
import styled from 'styled-components';
import {StyledPanelHeader} from "../styled-components/panel-header";
import {StyledPanel} from "../styled-components/panel";

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
    display: flex;
}
.b{
    position: absolute;
    left: 25px;
    top: 25px;
    height: 600px;
    width: 1025px;
    .content {
        height: calc(550px - 1.5rem);
        background: lightgray;
      }
   }
.c {
    position: absolute;
    left: 25px;
    bottom: 100px;
    height: 300px;
    width: 1025px;
    .content {
        height: calc(275px - 1.5rem);
        // background: #018281;
    }
}
.d {
    position: absolute;
    right: 25px;
    bottom: 400px;
    height: 300px;
    width: 810px;
    .content {
        height: calc(575px - 1.5rem);
        background: lightgray;
    }
}
}
`

export const Overlay = props => {
    const {playerInfo, matchHistory, loading, ratingHistory} = props;

    return (
        <OverlayDiv>
            <div className="a">
            <Panel playerInfo={playerInfo} matchHistory={matchHistory} loading={loading} title='crochet_aoe'/>
            <GraphPanel className='B' matchHistory={matchHistory} loading={loading} ratingHistory={ratingHistory} title='crochet_elo'/>
            </div>
            <div className="b">
                <StyledPanel title='age of empires'>
                    <StyledPanelHeader>age of empires</StyledPanelHeader>
                    <div className="content"></div>
                </StyledPanel>
            </div>
            <div className="c">
                <StyledPanel>
                    <StyledPanelHeader>crochet_chat</StyledPanelHeader>
                    <div className="content"></div>
                </StyledPanel>
            </div>
            <div className="d">
                <StyledPanel>
                    <StyledPanelHeader>crochet_cam</StyledPanelHeader>
                    <div className="content"></div>
                </StyledPanel>
            </div>
        </OverlayDiv>
    )
}