import * as THREE from 'three';
import { BaseRenderer } from './base-renderer';
import { CameraSettings } from './camera-settings';

export class PerspectiveRenderer extends BaseRenderer {
    camera: THREE.PerspectiveCamera;

    constructor(selector: string, inputCameraSettings?: CameraSettings) {
        super(selector);
        const cameraSettings = Object.assign({}, { fov: 50, near: 1, far: 1000 }, inputCameraSettings);
        this.camera = new THREE.PerspectiveCamera(cameraSettings.fov, this.canvas.clientWidth / this.canvas.clientHeight, cameraSettings.near, cameraSettings.far);
    }

    setupOrbitControls() {
        // new THREE.OrbitControls(this.camera);
    }
}