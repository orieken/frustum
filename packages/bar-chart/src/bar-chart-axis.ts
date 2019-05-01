import { Vector3, LineBasicMaterial, Geometry, Line, Group, GridHelper } from 'three';
import { textRenderer } from '@frustum-dev/common';
import { GRID_SIZE } from './bar-chart';
import { BarChartData } from './bar-chart-data.model';

const AXIS_NAME_MARGIN = 10;

export class BarChartAxis {
    private group = new Group();
    private chartData: BarChartData

    constructor(chartData: BarChartData) {
        this.chartData = chartData;
    }

    draw() {
        this.drawGrid(this.chartData)
        this.drawZAxisLines();
        this.drawAxisNames();
        this.drawScale();
        return this.group;
    }

    private drawAxisNames() {
        this.drawXAxisName();
        this.drawYAxisName();
        this.drawZAxisName();
    }

    private drawScale() {
        this.drawXScale();
    }

    private drawXScale() {
        

    }
    private drawXAxisName() {
        if (this.chartData.meta && this.chartData.meta.xAxisName && this.chartData.meta.xAxisName.label.length > 0) {
            this.group.add(textRenderer.drawHelvetikerBoldFontText({
                text: this.chartData.meta.xAxisName.label,
                z: GRID_SIZE / 2 + AXIS_NAME_MARGIN,
                xRotation: -Math.PI / 2,
                color: this.chartData.meta.xAxisName.color
            }));

            this.group.add(textRenderer.drawHelvetikerBoldFontText({
                text: this.chartData.meta.xAxisName.label,
                z: -GRID_SIZE / 2 - AXIS_NAME_MARGIN,
                yRotation: Math.PI,
                xRotation: Math.PI / 2,
                color: this.chartData.meta.xAxisName.color
            }));
        }
    }

    private drawYAxisName() {
        if (this.chartData.meta && this.chartData.meta.yAxisName && this.chartData.meta.yAxisName.label.length > 0) {
            this.group.add(textRenderer.drawHelvetikerBoldFontText({
                text: this.chartData.meta.yAxisName.label,
                x: -GRID_SIZE / 2 - AXIS_NAME_MARGIN,
                y: GRID_SIZE / 2,
                z: GRID_SIZE / 2 - AXIS_NAME_MARGIN,
                yRotation: Math.PI / 2,
                color: this.chartData.meta.yAxisName.color
            }));
        }
    }

    private drawZAxisName() {
        if (this.chartData.meta && this.chartData.meta.zAxisName && this.chartData.meta.zAxisName.label.length > 0) {
            this.group.add(textRenderer.drawHelvetikerBoldFontText({
                text: this.chartData.meta.zAxisName.label,
                x: GRID_SIZE / 2 + AXIS_NAME_MARGIN,
                xRotation: -Math.PI / 2,
                zRotation: Math.PI / 2,
                color: this.chartData.meta.zAxisName.color
            }));

            this.group.add(textRenderer.drawHelvetikerBoldFontText({
                text: this.chartData.meta.zAxisName.label,
                x: -GRID_SIZE / 2 - AXIS_NAME_MARGIN,
                xRotation: -Math.PI / 2,
                zRotation: -Math.PI / 2,
                color: this.chartData.meta.zAxisName.color
            }));
        }
    }

    private drawZAxisLines() {
        const material = new LineBasicMaterial({ color: 0xd1d2d3 });
        let corner1 = new Geometry();
        corner1.vertices = [
            new Vector3(-GRID_SIZE / 2, 0, GRID_SIZE / 2),
            new Vector3(-GRID_SIZE / 2, GRID_SIZE, GRID_SIZE / 2)
        ];
        this.group.add(new Line(corner1, material));
    }

    private drawGrid(chartData: BarChartData) {
        this.group.add(new GridHelper(GRID_SIZE, chartData.data.length));
    }
}