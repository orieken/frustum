import * as THREE from 'three';

export class BaseRenderer {
    canvas: HTMLCanvasElement;
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    
    constructor(selector: string) {
        this.canvas = document.querySelector(selector) as HTMLCanvasElement;
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true });
        this.scene = new THREE.Scene();
    }
}