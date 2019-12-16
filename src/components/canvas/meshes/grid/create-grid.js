import { Vector3, Face3 } from 'three';
import perlin from './perlin';


const CreateGrid = (xSize, zSize, offset = 0) => {
    perlin.noise.seed(43132);

    const cellSize = 1;
    const vertices = [];
    const faces = [];

    let cellCountX = Math.ceil(xSize / cellSize);
    let cellCountZ = Math.ceil(zSize / cellSize);

    const baseX = -0.5 * xSize;
    const baseZ = -1.03 * zSize;

    // Render grid
    for (let z = 0; z < cellCountZ; z++) {
        const currentZ = z * cellSize + baseZ;

        for (let x = 0; x < cellCountX; x++) {
            const currentX = x * cellSize + baseX;
            const currentHeight = perlin.noise.simplex2(z / 6 + offset, x / 6);

            vertices.push(currentX, currentHeight, currentZ);
        }
    }

    return {
        vertices,
    }
}

export default CreateGrid;