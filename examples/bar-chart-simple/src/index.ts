import { BarChart, BarChartData, BarBuilder } from '@frustum-dev/bar-chart';

const barChartData: BarChartData = {
    meta: {
        name: 'First 3D bar chart',
        description: 'this is new 3D bar chart',
        xAxisName: {
            label: 'Altitude',
            color: 'red'
        },
        xScale: [
            { value: 0, color: 'red' },
            { value: 1 },
            { value: 2 },
            { value: 3 }
        ],
        yAxisName: {
            label: 'Energy Generated',
            color: 'blue'
        },
        yScale: [
            { value: 1000, color: 'blue' },
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
        zAxisName: {
            label: 'Country'
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
        ]

    },
    data: [
        new BarBuilder().setX(0).setY(1).setZ(0).build(),
        new BarBuilder().setX(1).setY(2).setZ(0).build(),
        new BarBuilder().setX(2).setY(3).setZ(0).build(),
        new BarBuilder().setX(3).setY(4).setZ(0).build(),
        new BarBuilder().setX(4).setY(5).setZ(0).build(),
        new BarBuilder().setX(5).setY(6).setZ(0).build(),
        new BarBuilder().setX(6).setY(7).setZ(0).build(),
        new BarBuilder().setX(7).setY(8).setZ(0).build(),
        new BarBuilder().setX(8).setY(9).setZ(0).build(),
        new BarBuilder().setX(9).setY(10).setZ(0).build(),
        new BarBuilder().setX(10).setY(11).setZ(0).build(),
        new BarBuilder().setX(11).setY(12).setZ(0).build()
    ]
};

new BarChart('#frustum', barChartData);