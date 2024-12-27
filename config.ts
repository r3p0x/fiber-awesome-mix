type Coordinate = {
  x: number
  y: number
  z: number
}

type Coordinate2D = Omit<Coordinate, 'y'>

export type Config = {
  area: {
    type: 'grasland'
    length: number
    width: number
    // coordinates: Coordinate[]
  }
  objects: {
    id: number
    type: 'tree'
    position: Coordinate2D
  }[]
}

const LENGTH = 15
const WIDTH = 15

export const CONFIG: Config = {
  area: {
    type: 'grasland',
    length: LENGTH,
    width: WIDTH,
    // coordinates: [
    //     { x: 0, y: 0, z: 0 },
    //     { x: 10, y: 0, z: 0 },
    //     { x: 0, y: 0, z: 10 },
    //     { x: 10, y: 0, z: 10 },
    // ]
  },
  objects: [
    {
      id: 0,
      type: 'tree',
      position: {
        x: Math.round(Math.random() * LENGTH),
        z: Math.round(Math.random() * WIDTH),
      },
    },
    // {
    //   id: 1,
    //   type: 'tree',
    //   position: {
    //     x: Math.round(Math.random() * LENGTH),
    //     z: Math.round(Math.random() * WIDTH),
    //   },
    // },
    // {
    //   id: 2,
    //   type: 'tree',
    //   position: {
    //     x: Math.round(Math.random() * LENGTH),
    //     z: Math.round(Math.random() * WIDTH),
    //   },
    // },
    // {
    //   id: 3,
    //   type: 'tree',
    //   position: {
    //     x: Math.round(Math.random() * LENGTH),
    //     z: Math.round(Math.random() * WIDTH),
    //   },
    // },
    // {
    //   id: 4,
    //   type: 'tree',
    //   position: {
    //     x: Math.round(Math.random() * LENGTH),
    //     z: Math.round(Math.random() * WIDTH),
    //   },
    // },
    // {
    //   id: 5,
    //   type: 'tree',
    //   position: {
    //     x: Math.round(Math.random() * LENGTH),
    //     z: Math.round(Math.random() * WIDTH),
    //   },
    // },
    // {
    //   id: 6,
    //   type: 'tree',
    //   position: {
    //     x: Math.round(Math.random() * LENGTH),
    //     z: Math.round(Math.random() * WIDTH),
    //   },
    // },
    // {
    //   id: 7,
    //   type: 'tree',
    //   position: {
    //     x: Math.round(Math.random() * LENGTH),
    //     z: Math.round(Math.random() * WIDTH),
    //   },
    // },
    // {
    //   id: 8,
    //   type: 'tree',
    //   position: {
    //     x: Math.round(Math.random() * LENGTH),
    //     z: Math.round(Math.random() * WIDTH),
    //   },
    // },
    // {
    //   id: 9,
    //   type: 'tree',
    //   position: {
    //     x: Math.round(Math.random() * LENGTH),
    //     z: Math.round(Math.random() * WIDTH),
    //   },
    // },
    // {
    //   id: 10,
    //   type: 'tree',
    //   position: {
    //     x: Math.round(Math.random() * LENGTH),
    //     z: Math.round(Math.random() * WIDTH),
    //   },
    // },
  ],
}
