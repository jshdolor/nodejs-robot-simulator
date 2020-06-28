export enum Direction {
    NORTH,
    EAST,
    SOUTH,
    WEST,
}

export enum DirectionBehavior {
    NORTH = 1,
    EAST = 1,
    SOUTH = 0,
    WEST = 0,
}

export type DirectionKey = keyof typeof Direction;

export interface Point {
    x: number;
    y: number;
}
