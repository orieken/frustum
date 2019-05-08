import { Vector3, LineBasicMaterial, Geometry, Line, Group } from 'three';
import { textRenderer } from '@frustum-dev/common';
import { GRID_SIZE } from './bar-chart';
import { BarChartMeta } from './data-model';

const AXIS_NAME_MARGIN = 5;
const AXIS_LABEL_MARGIN = 25;
const AXIS_COLOR = 0x888888;

export class BarChartAxis {
    private group = new Group();
    private material = new LineBasicMaterial({ color: AXIS_COLOR });
    private chartMeta: BarChartMeta;

    constructor(chartMeta: BarChartMeta) {
        this.chartMeta = chartMeta;
    }

    draw() {
        this.group.position.set(-GRID_SIZE / 2, 0, GRID_SIZE / 2);
        this.drawAxisAndScale();
        this.drawAxisNames();
        return this.group;
    }

    private drawAxisAndScale() {
        this.drawXAxisAndScale();
        this.drawYAxisAndScale();
        this.drawZAxisAndScale();
    }

    private drawAxisNames() {
        this.drawXAxisName();
        this.drawYAxisName();
        this.drawZAxisName();
    }

    private drawXAxisAndScale() {
        this.drawLines([[new Vector3(0, 0, 0), new Vector3(GRID_SIZE, 0, 0)]]);
        let vertices: Vector3[][] = [];
        const acc = GRID_SIZE / (this.chartMeta.xScale.length - 1);
        for (let i = 0; i < this.chartMeta.xScale.length; i++) {
            vertices.push([new Vector3(i * acc, 0, 0), new Vector3(i * acc, 0, -GRID_SIZE)]);
            this.drawScale(String(this.chartMeta.xScale[i]), new Vector3(i * acc, 0, AXIS_NAME_MARGIN), new Vector3(-Math.PI / 2, 0, 0));
            this.drawScale(String(this.chartMeta.xScale[i]), new Vector3(i * acc, 0, -GRID_SIZE - AXIS_NAME_MARGIN), new Vector3(-Math.PI / 2, 0, -Math.PI));
        }
        this.drawLines(vertices);
    }

    private drawYAxisAndScale() {
        this.drawLines([
            [new Vector3(0, 0, 0), new Vector3(0, GRID_SIZE / 2, 0)],
            [new Vector3(GRID_SIZE, 0, -GRID_SIZE), new Vector3(GRID_SIZE, GRID_SIZE / 2, -GRID_SIZE)]
        ]);
        const acc = (GRID_SIZE / (this.chartMeta.yScale.length - 1)) / 2;
        for (let i = 0; i < this.chartMeta.yScale.length; i++) {
            this.drawScale(
                String(this.chartMeta.yScale[i]),
                new Vector3(-AXIS_NAME_MARGIN, i * acc, 0),
                new Vector3(0, Math.PI, 0)
            );

            this.drawScale(
                String(this.chartMeta.yScale[i]),
                new Vector3(GRID_SIZE + AXIS_NAME_MARGIN, i * acc, -GRID_SIZE),
                new Vector3(0, 0, 0)
            );
        }
    }

    private drawZAxisAndScale() {
        this.drawLines([[new Vector3(0, 0, 0), new Vector3(0, 0, -GRID_SIZE)]]);
        let vertices: Vector3[][] = [];
        const acc = GRID_SIZE / (this.chartMeta.zScale.length - 1);
        for (let i = 0; i < this.chartMeta.zScale.length; i++) {
            vertices.push([new Vector3(0, 0, -i * acc), new Vector3(GRID_SIZE, 0, -i * acc)]);
            this.drawScale(
                String(this.chartMeta.zScale[i]),
                new Vector3(-AXIS_NAME_MARGIN, 0, -i * acc),
                new Vector3(-Math.PI / 2, 0, Math.PI)
            );
            this.drawScale(
                String(this.chartMeta.zScale[i]),
                new Vector3(GRID_SIZE + AXIS_NAME_MARGIN, 0, -i * acc),
                new Vector3(-Math.PI / 2, 0, 0)
            );
        }
        this.drawLines(vertices);
    }

    private drawScale(text: string, position: Vector3, rotation: Vector3, color?: string) {
        this.group.add(textRenderer.drawHelvetikerBoldFontText({
            text: text,
            x: position.x,
            y: position.y,
            z: position.z,
            xRotation: rotation.x,
            yRotation: rotation.y,
            zRotation: rotation.z,
            color: color
        }));
    }

    private drawLines(vertices: Vector3[][]) {
        vertices.forEach(vertix => {
            let corner1 = new Geometry();
            corner1.vertices = vertix;
            this.group.add(new Line(corner1, this.material));
        });
    }

    private drawXAxisName() {
        const xAxisName = this.chartMeta.xAxisName;
        if (xAxisName && xAxisName.label.length > 0) {
            this.group.add(textRenderer.drawHelvetikerBoldFontText({
                text: xAxisName.label,
                x: GRID_SIZE / 2,
                z: AXIS_LABEL_MARGIN,
                xRotation: - Math.PI / 2,
                color: xAxisName.color
            }));

            this.group.add(textRenderer.drawHelvetikerBoldFontText({
                text: xAxisName.label,
                x: GRID_SIZE / 2,
                z: -GRID_SIZE - AXIS_LABEL_MARGIN,
                yRotation: Math.PI,
                xRotation: Math.PI / 2,
                color: xAxisName.color
            }));
        }
    }

    private drawYAxisName() {
        const yAxisName = this.chartMeta.yAxisName;
        if (yAxisName && yAxisName.label.length > 0) {
            this.group.add(textRenderer.drawHelvetikerBoldFontText({
                text: yAxisName.label,
                x: -AXIS_LABEL_MARGIN,
                y: GRID_SIZE / 4,
                z: 0,
                yRotation: Math.PI,
                color: yAxisName.color
            }));

            this.group.add(textRenderer.drawHelvetikerBoldFontText({
                text: yAxisName.label,
                x: GRID_SIZE + AXIS_LABEL_MARGIN,
                y: GRID_SIZE / 4,
                z: -GRID_SIZE,
                color: yAxisName.color
            }));
        }
    }

    private drawZAxisName() {
        const zAxisName = this.chartMeta.zAxisName;
        if (zAxisName && zAxisName.label.length > 0) {
            this.group.add(textRenderer.drawHelvetikerBoldFontText({
                text: zAxisName.label,
                x: GRID_SIZE + AXIS_LABEL_MARGIN,
                z: -GRID_SIZE / 2,
                xRotation: -Math.PI / 2,
                zRotation: Math.PI / 2,
                color: zAxisName.color
            }));

            this.group.add(textRenderer.drawHelvetikerBoldFontText({
                text: zAxisName.label,
                x: -AXIS_LABEL_MARGIN,
                z: -GRID_SIZE / 2,
                xRotation: -Math.PI / 2,
                zRotation: -Math.PI / 2,
                color: zAxisName.color
            }));
        }
    }
}