import {StyledPanel} from '../styled-components/panel';
import ApexChart from 'react-apexcharts';
import {filterMatchHistory} from '../helpers';

export const GraphPanel = props => {
    const data = [];
    props.ratingHistory.map(crochet => data.push(crochet.rating));

    const options = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'elo',
            style: {
                fontSize: '25px',
                color: 'black'
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
            <ApexChart options={options} series={options.series} colors={options.colors} height={250} width={350}/>
        </StyledPanel>
    )
};