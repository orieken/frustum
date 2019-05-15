// import { PerspectiveCamera, Vector3 } from 'three';
// import { BaseRenderer } from './base-renderer';
// import { CameraSettings } from './camera-settings.model';
// import { OrbitControls } from '@workswithweb/threejs-orbit-controls';

// export class PerspectiveRenderer extends BaseRenderer {
//     private camera: PerspectiveCamera;

//     constructor(selector: string, cameraSettings: CameraSettings) {
//         super(selector);
//         this.camera = new PerspectiveCamera(cameraSettings.fov, this.getScreenAspectRatio(), cameraSettings.near, cameraSettings.far);
//     }

//     renderScene() {
//         this.setCameraAspect();
//         this.render(this.camera);
//     }

//     setCameraPosition(position: Vector3) {
//         this.camera.position.set(position.x, position.y, position.z);
//         this.camera.lookAt(0, 0, 0);
//     }

//     private setCameraAspect() {
//         if (this.resizeRendererToDisplaySize()) {
//             this.camera.aspect = this.getScreenAspectRatio();
//             this.camera.updateProjectionMatrix();
//         }
//     }

//     enableOrbitControls() {
//         return new OrbitControls(this.camera);
//     }
// }