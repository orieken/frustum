import { TextBufferGeometry, MeshBasicMaterial, Mesh, FontLoader, Font, Color } from 'three';
import * as HelvetikerBoldFont from './font/helvetiker_regular.json';

export interface TextSettings {
    text: string;
    size?: number;
    x?: number;
    y?: number;
    z?: number;
    xRotation?: number;
    yRotation?: number;
    zRotation?: number;
    color?: number | string;
}

class TextRenderer {
    helvetikerBoldFont?: Font;

    constructor() {
        this.helvetikerBoldFont = new FontLoader().parse(HelvetikerBoldFont);
    }

    drawHelvetikerBoldFontText(textSettings: TextSettings) {
        var geometry = new TextBufferGeometry(textSettings.text, {
            font: this.helvetikerBoldFont,
            size: textSettings.size || 1.8,
            height: 0
        });
        const material = new MeshBasicMaterial({ color: new Color(textSettings.color || 0x44aa88) });
        const textMesh = new Mesh(geometry, material);
        textMesh.rotation.x = textSettings.xRotation || 0;
        textMesh.rotation.y = textSettings.yRotation || 0;
        textMesh.rotation.z = textSettings.zRotation || 0;
        textMesh.position.x = textSettings.x || 0;
        textMesh.position.y = textSettings.y || 0;
        textMesh.position.z = textSettings.z || 0;

        return textMesh;
    }
}

export const textRenderer = new TextRenderer();