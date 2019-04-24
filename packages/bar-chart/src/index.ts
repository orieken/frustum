import * as THREE from 'three';
import { PerspectiveRenderer } from '@frustum-dev/common';

export class BarChart {
    renderer: PerspectiveRenderer;

    constructor(selector: string) {
        this.renderer = new PerspectiveRenderer(selector);
        this.initFrame()
    }

    initFrame() {
        this.renderer.sceneBackground(0xf0f0f0);
        this.renderer.camera.position.set(10, 10, 10);
        this.renderer.scene.add(new THREE.GridHelper(100, 10));
        this.render();
    }

    render(time = 0) {
        const canvas = this.renderer.renderer.domElement;
        if (canvas && this.renderer.resizeRendererToDisplaySize()) {
            this.renderer.camera.aspect = canvas.clientWidth / canvas.clientHeight;
            this.renderer.camera.updateProjectionMatrix();
        }
        this.renderer.renderer.render(this.renderer.scene, this.renderer.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}