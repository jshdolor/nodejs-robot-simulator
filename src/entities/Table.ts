import { Point } from '../types';

export class Table {
    size: number;

    constructor(size: number) {
        this.size = size;
    }

    get maxPoints(): Point {
        return {
            x: this.size - 1,
            y: this.size - 1,
        };
    }

    positionAllowed(point: Point): boolean {
        const { x, y } = point;

        return (
            x >= 0 && x <= this.maxPoints.x && y >= 0 && y <= this.maxPoints.y
        );
    }
}
