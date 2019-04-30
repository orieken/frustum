import { TextBufferGeometry, MeshBasicMaterial, Mesh, FontLoader, Font } from 'three';

class TextRenderer {
    loader = new FontLoader();
    font?: Font;

    drawText() {
        var geometry = new TextBufferGeometry('0', {
            font: font,
            size: 2,
            height: 0
        });
        const material = new MeshBasicMaterial({ color: 0x44aa88 });
        const textMesh = new Mesh(geometry, material);
        textMesh.rotation.x = -Math.PI / 2;
        //textMesh.position.set(HALF_LENGTH, 0, HALF_LENGTH);
    }
}

export const textRenderer = new TextRenderer();