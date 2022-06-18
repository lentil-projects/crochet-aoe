import {StyledPanel} from '../styled-components/panel';
import ApexChart from 'react-apexcharts';
import {filterMatchHistory} from '../helpers';
import {PanelHeader} from '../styled-components/panel-header';

export const GraphPanel = props => {
    const data = [];
    props.ratingHistory.map(crochet => data.push(crochet.rating));
    const {title} = props;
    const matchHistory = filterMatchHistory(props.matchHistory);
    const trimmedRatings = data.slice(0, matchHistory.length).reverse();

    const options = {
        chart: {
            type: 'line',
            toolbar: {
                show: false
            },
            background: '#fff'
        },
        series: [{
            name: 'elo',
            data: trimmedRatings
        }],
        xaxis: {
            categories: matchHistory,
        },
        yaxis: {
            categories: matchHistory,
            labels: {
                style: {
                    fontSize: '15px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        colors: ['#800080']
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