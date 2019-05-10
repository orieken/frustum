import { BarChart, BarChartModel } from '@frustum-dev/bar-chart';

const barChartData: BarChartModel = {
    meta: {
        name: 'First 3D bar chart',
        description: 'this is new 3D bar chart',
        xAxisName: {
            label: 'Altitude',
            color: 'blue'
        },
        xScale: [
            { value: 0 },
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 }
        ],
        xScaleColor: 'blue',
        yAxisName: {
            label: 'Energy Generated',
            color: 'green'
        },
        yScale: [
            { value: 1000 },
            { value: 2000 },
            { value: 3000 },
            { value: 4000 },
            { value: 5000 },
            { value: 6000 },
            { value: 7000 },
            { value: 8000 },
            { value: 9000 },
            { value: 10000 }
        ],
        yScaleColor: 'green',
        zAxisName: {
            label: 'Country',
            color: 'red'
        },
        zScale: [
            { label: 'India', value: 10 },
            { label: 'USA', value: 20 },
            { label: 'China', value: 30 },
            { label: 'Russia', value: 40 },
            { label: 'Canada', value: 50 },
            { label: 'Nepal', value: 60 },
            { label: 'Singapore', value: 70 },
            { label: 'Burma', value: 80 },
            { label: 'Brazil', value: 90 },
            { label: 'Africa', value: 100 }
        ],
        zScaleColor: 'red'

    }
};

new BarChart('#frustum', barChartData);