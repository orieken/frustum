// import { TextBufferGeometry, MeshBasicMaterial, Mesh, Color } from 'three';
// import { helvetikerRegularFont } from './font/helvetiker-font-service';

// export interface TextSettings {
//     text: string;
//     size?: number;
//     x?: number;
//     y?: number;
//     z?: number;
//     xRotation?: number;
//     yRotation?: number;
//     zRotation?: number;
//     color?: number | string;
// }

// export function getHelvetikerRegularTextMesh(textSettings: TextSettings) {
//     var geometry = new TextBufferGeometry(textSettings.text, {
//         font: helvetikerRegularFont,
//         size: textSettings.size || 1.8,
//         height: 0
//     });
//     const material = new MeshBasicMaterial({ color: new Color(textSettings.color || 'black') });
//     const textMesh = new Mesh(geometry, material);
//     textMesh.rotation.x = textSettings.xRotation || 0;
//     textMesh.rotation.y = textSettings.yRotation || 0;
//     textMesh.rotation.z = textSettings.zRotation || 0;
//     textMesh.position.x = textSettings.x || 0;
//     textMesh.position.y = textSettings.y || 0;
//     textMesh.position.z = textSettings.z || 0;
//     return textMesh;
// }

export function sum(a: number, b: number) {
    return a + b;
}