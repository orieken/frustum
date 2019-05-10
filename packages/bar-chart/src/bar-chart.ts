import { Group, Vector3 } from 'three';
import { PerspectiveRenderer } from '@frustum-dev/common';
import { CameraSettings } from '@frustum-dev/common';
import { BarChartModel } from './bar-chart-model';
import { DrawBarChartAxis } from './draw-bar-chart-axis';
import { GRID_SIZE } from './constants';

export class BarChart {
    private renderer: PerspectiveRenderer;
    private group = new Group();
    private chartData: BarChartModel;

    constructor(selector: string, chartData: BarChartModel) {
        this.chartData = chartData;
        const cameraSettings: CameraSettings = { fov: 50, near: 1, far: GRID_SIZE * 10 };
        this.renderer = new PerspectiveRenderer(selector, cameraSettings);
        this.draw();
    }

    private draw() {
        this.renderer.sceneBackground(0xf0f0f0);
        this.renderer.setCameraPosition(new Vector3(GRID_SIZE, GRID_SIZE, GRID_SIZE));
        this.renderer.enableOrbitControls();

        this.group.add(new DrawBarChartAxis(this.chartData.meta).draw());
        this.renderer.addToScene(this.group);
        this.render();
    }

    private render() {
        this.renderer.renderScene();
        requestAnimationFrame(this.render.bind(this));
    }
}