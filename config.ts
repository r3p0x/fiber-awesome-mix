type Coordinate = {
    x: number
    y: number
    z: number
}

type Coordinate2D = Omit<Coordinate, "y">

export type Config = {
    area: {
        type: 'grasland'
        coordinates: Coordinate[]
    }
    objects: { 
        type: 'tree', 
        position: Coordinate2D 
    }[]
}

export const CONFIG: Config = {
    area: {
        type: 'grasland',
        coordinates: [
            { x: 0, y: 0, z: 0 },
            { x: 10, y: 0, z: 0 },
            { x: 0, y: 0, z: 10 },
            { x: 10, y: 0, z: 10 },
        ]
    },
    objects: [
        { type: 'tree', position: { x: 2, z: 2} },
        { type: 'tree', position: { x: 3, z: 3} },
        { type: 'tree', position: { x: 4, z: 4} },
        { type: 'tree', position: { x: 1, z: 3} },
        { type: 'tree', position: { x: 3, z: 1} },
    ]
}