import { Vector3, LineBasicMaterial, Geometry, Line, Group, GridHelper } from 'three';
import { GRID_SIZE } from './bar-chart';
import { BarChartData } from './bar-chart-data.model';

export class BarChartAxis {
    private group = new Group();
    private chartData: BarChartData

    constructor(chartData: BarChartData) {
        this.chartData = chartData;
    }

    draw() {
        this.drawGrid(this.chartData)
        this.drawZAxisLines();
        this.drawXAxisName();
        return this.group;
    }

    private drawXAxisName() {
        if (this.chartData.meta && this.chartData.meta.xAxisName && this.chartData.meta.xAxisName.length > 0) {

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

        let corner2 = new Geometry();
        corner2.vertices = [
            new Vector3(-GRID_SIZE / 2, 0, -GRID_SIZE / 2),
            new Vector3(-GRID_SIZE / 2, GRID_SIZE, -GRID_SIZE / 2)
        ];
        this.group.add(new Line(corner2, material));

        let corner3 = new Geometry();
        corner3.vertices = [
            new Vector3(GRID_SIZE / 2, 0, -GRID_SIZE / 2),
            new Vector3(GRID_SIZE / 2, GRID_SIZE, -GRID_SIZE / 2)
        ];
        this.group.add(new Line(corner3, material));
    }

    private drawGrid(chartData: BarChartData) {
        this.group.add(new GridHelper(GRID_SIZE, chartData.data.length));
    }
}