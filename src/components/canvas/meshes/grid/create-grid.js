import { Vector3, Face3 } from 'three';
import perlin from './perlin';


const CreateGrid = (width, height, widthSegments, heightSegments, offset = 0) => {
    perlin.noise.seed(43132);

    const vertices = [];

    const cellWidth = width / widthSegments;
    const cellHeight = height / heightSegments;

    const baseX = -0.5 * width;
    const baseZ = -1 * height;

    // Render grid
    for (let z = 0; z < heightSegments + 1; z++) {
        const currentZ = z * cellHeight + baseZ;

        for (let x = 0; x < widthSegments + 1; x++) {
            const currentX = x * cellWidth + baseX;
            const currentHeight = perlin.noise.simplex2(z / 6 + offset, x / 6);

            vertices.push(currentX, currentHeight, currentZ);
        }
    }

    return {
        vertices,
    }
}

export default CreateGrid;