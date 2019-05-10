import { Color } from 'three';
import { ChartData } from '@frustum-dev/common';

interface BarChartModel {
    meta: BarChartMeta;
    data?: BarChartData[];
}

interface BarChartMeta extends ChartData {
    xAxisName?: AxisScale;
    yAxisName?: AxisScale;
    zAxisName?: AxisScale;
    xScale: AxisScale[];
    yScale: AxisScale[];
    zScale: AxisScale[];
    xScaleColor?: number | string;
    yScaleColor?: number | string;
    zScaleColor?: number | string;
}

interface AxisScale {
    label?: string;
    value?: number;
    color?: number | string;
}

interface BarChartData {
    x: number | string;
    y: number | string;
    z: number | string;
    color?: Color | string | number;
    rotationSpeed: number;
}

export { BarChartModel, BarChartMeta, BarChartData, AxisScale };