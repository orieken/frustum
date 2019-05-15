// import { WebGLRenderer, Scene, Color, Object3D, Camera } from 'three';

// export class BaseRenderer {
//     private canvas: HTMLCanvasElement;
//     private renderer: WebGLRenderer;
//     private scene: Scene;

//     constructor(selector: string) {
//         this.canvas = document.querySelector(selector) as HTMLCanvasElement;
//         this.renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true });
//         this.scene = new Scene();
//     }

//     render(camera: Camera) {
//         this.renderer.render(this.scene, camera);
//     }

//     getScreenAspectRatio() {
//         const canvasElm = this.renderer.domElement;
//         return canvasElm.clientWidth / canvasElm.clientHeight;
//     }

//     sceneBackground(color: string | number) {
//         this.scene.background = new Color(color);
//     }

//     addToScene(object: Object3D) {
//         this.scene.add(object);
//     }

//     resizeRendererToDisplaySize() {
//         const canvas = this.renderer.domElement;
//         const width = canvas.clientWidth;
//         const height = canvas.clientHeight;
//         const needResize = canvas.width !== width || canvas.height !== height;
//         if (needResize) {
//             this.renderer.setSize(width, height, false);
//         }
//         return needResize;
//     }
// }