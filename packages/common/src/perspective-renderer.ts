import * as THREE from 'three';
import { BaseRenderer } from './base-renderer';
import { CameraSettings } from './camera-settings';

export class PerspectiveRenderer extends BaseRenderer {
    camera: THREE.PerspectiveCamera;

    constructor(selector: string, cameraSettings?: CameraSettings) {
        super(selector);
        const camSettings = Object.assign({}, { fov: 50, near: 0.1, far: 1000 }, cameraSettings);
        this.camera = new THREE.PerspectiveCamera(camSettings.fov, this.canvas.clientWidth / this.canvas.clientHeight, camSettings.near, camSettings.far);
    }
}