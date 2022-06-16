import {StyledPanel} from '../styled-components/panel';
import ApexChart from 'react-apexcharts';
import {filterMatchHistory} from '../helpers';
import {PanelHeader} from '../styled-components/panel-header';

export const GraphPanel = props => {
    const data = [];
    props.ratingHistory.map(crochet => data.push(crochet.rating));
    const {title} = props;

    const options = {
        chart: {
            type: 'line',
            toolbar: {
                show: false
            }
        },
        series: [{
            name: 'elo',
            data: data.reverse()
        }],
        xaxis: {
            categories: filterMatchHistory(props.matchHistory)
        },
        colors: ['#000']
    }

    return (
        <StyledPanel>
            {title && <PanelHeader title={title}/>}
            <div className='content'>
            <ApexChart
                options={options}
                colors={options.colors}
                series={options.series}
                width={350}
            />
            </div>
        </StyledPanel>
    )
};