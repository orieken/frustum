import { Group, Vector3 } from 'three';
import { PerspectiveRenderer } from '@frustum-dev/common';
import { CameraSettings } from '@frustum-dev/common';
import { BarChartData } from './bar-chart-data.model';
import { BarChartAxis } from './bar-chart-axis';

export const GRID_SIZE = 100;

export class BarChart {
    private renderer: PerspectiveRenderer;
    private group = new Group();
    private chartData: BarChartData;


    constructor(selector: string, chartData: BarChartData) {
        this.chartData = chartData;
        const cameraSettings: CameraSettings = { fov: 50, near: 1, far: GRID_SIZE * 10 };
        this.renderer = new PerspectiveRenderer(selector, cameraSettings);
        this.draw();
    }

    private draw() {
        this.renderer.sceneBackground(0xf0f0f0);
        this.renderer.setCameraPosition(new Vector3(GRID_SIZE, GRID_SIZE, GRID_SIZE));
        this.renderer.enableOrbitControls();
        this.drawMetaData();

        this.renderer.addToScene(this.group);
        this.render();
    }

    private drawMetaData() {
        this.group.add(new BarChartAxis(this.chartData).draw());
    }

    private render() {
        this.renderer.renderScene();
        requestAnimationFrame(this.render.bind(this));
    }
}