import { BarChart, BarChartData, BarBuilder } from '@frustum-dev/bar-chart';

const barChartData: BarChartData = {
    meta: {
        name: 'First 3D bar chart',
        description: 'this is new 3D bar chart',
        xAxisName: 'Altitude',
        yAxisName: 'Energy Generated',
        zAxisName: 'Country'
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