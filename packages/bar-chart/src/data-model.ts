import { Color } from 'three';
import { ChartData } from '@frustum-dev/common';

class BarChartData {
    meta: BarChartMeta;
    data: Bar[];

    constructor(data: Bar[], meta: BarChartMeta) {
        this.data = data;
        this.meta = meta;
    }
}

interface BarChartMeta extends ChartData {
    xAxisName?: AxisScale;
    yAxisName?: AxisScale;
    zAxisName?: AxisScale;
    xScale: AxisScale[];
    yScale: AxisScale[];
    zScale: AxisScale[];
    yScaleColor?: number | string;
    xScaleColor?: number | string;
    zScaleColor?: number | string;
}

interface AxisScale {
    label?: string;
    value?: number;
    color?: number | string;
}

class Bar {
    x = 0;
    y = 0;
    z = 0;
    color?: Color | string | number;
    rotationSpeed = 0;

    constructor(barBuilder: BarBuilder) {
        this.x = barBuilder.x;
        this.y = barBuilder.y;
        this.z = barBuilder.z;
        this.color = barBuilder.color;
        this.rotationSpeed = barBuilder.rotationSpeed;
    }
}

class BarBuilder {
    private _x: number = 0;
    private _y: number = 0;
    private _z: number = 0;
    private _color?: Color | string | number;
    private _rotationSpeed = 0;

    setX(x: number) {
        this._x = x;
        return this;
    }

    get x() {
        return this._x;
    }

    setY(y: number) {
        this._y = y;
        return this;
    }

    get y() {
        return this._y;
    }

    setZ(z: number) {
        this._z = z;
        return this;
    }

    get z() {
        return this._z;
    }

    setColor(color?: Color | string | number) {
        this._color = color;
        return this;
    }

    get color() {
        return this._color;
    }

    setRotationSpeed(rotationSpeed: number) {
        this._rotationSpeed = rotationSpeed;
        return this;
    }

    get rotationSpeed() {
        return this._rotationSpeed;
    }

    build() {
        return new Bar(this);
    }
}

export { BarBuilder, Bar, BarChartData, AxisScale, BarChartMeta };