// from: https://github.com/birkir/react-three-fiber-examples/blob/0a016d4f6ad09db4e43aae056b447e0cc77df038/src/screens/Font.js

import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import React, { useState, useMemo } from 'react'
import fontFile from './share_tech_mono.json';

export default function Text({ children, addRef, size = 1, letterSpacing = 0.01, color = '#000000', centerX = true, centerY = true, ...props }) {
    const [font] = useState(() => new FontLoader().parse(fontFile))
    const [shapes, [x, y]] = useMemo(() => {
        let x = 0,
            y = 0
        let letters = [...String(children)]
        let mat = new THREE.MeshBasicMaterial({ color, opacity: 0.5, wireframe: true, transparent: true })
        return [
            letters.map(letter => {
                const geom = new THREE.ShapeGeometry(font.generateShapes(letter, size, 1))
                geom.computeBoundingBox()
                const mesh = new THREE.Mesh(geom, mat)
                mesh.position.x = x
                x += geom.boundingBox.max.x + letterSpacing
                y = Math.max(y, geom.boundingBox.max.y)
                return mesh
            }),
            [x, y]
        ]
    }, [font, children, size, letterSpacing, color])
    return (
        <group ref={addRef} {...props}>
            <group position={[centerX ? -x / 2 : 0, centerY ? -y / 2 : 0, 0]}>
                {shapes.map((shape, index) => (
                    <primitive key={index} object={shape} />
                ))}
            </group>
        </group>
    )
}
