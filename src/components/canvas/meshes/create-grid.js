import { Vector3, Face3 } from 'three';
import perlin from './perlin';


const CreateGrid = (offset = 0) => {
    perlin.noise.seed(43132);

    const gridSizeX = 100;
    const gridSizeZ = 100;

    const cellSize = 1;
    const grid = [];
    const vertices = [];
    const faces = [];

    let cellCountX = Math.ceil(gridSizeX / cellSize);
    let cellCountZ = Math.ceil(gridSizeZ / cellSize);

    const baseX = -0.5 * gridSizeX;
    const baseZ = -0.5 * gridSizeZ;

    // Render grid
    for (let z = 0; z < cellCountZ; z++) {
        const currentZ = z * cellSize + baseZ;
        grid[z] = [];

        for (let x = 0; x < cellCountX; x++) {
            const currentX = x * cellSize + baseX;
            const currentHeight = perlin.noise.simplex2(z / 64 + offset, x / 64);
            grid[z].push(new Vector3(currentX, currentHeight, currentZ));
        }
    }

    for (let z = 0; z + 1 < grid.length; z++) {
        const current = grid[z];

        for (let x = 0; x + 1 < current.length; x++) {
            const arrayPos = ((z * current.length) + x) * 3;

            const vertex1 = grid[z][x];
            const vertex2 = grid[z + 1][x];
            const vertex3 = grid[z][x + 1];

            vertices.push(vertex1, vertex2, vertex3);
            faces.push(new Face3(arrayPos, arrayPos + 1, arrayPos + 2));
        }
    }

    return {
        vertices,
        faces
    };
}

export default CreateGrid;