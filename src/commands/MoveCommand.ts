import RobotCommand from './RobotCommand';
import { Point, Direction, DirectionBehavior } from '../types';

export default class MoveCommand extends RobotCommand {
    execute(): Point | false {
        const { direction } = this.robot.placement;
        const { x, y } = this.robot.placement.position;
        const { x: maxX, y: maxY } = this.robot.table.maxPoints;

        const stillAllowedToMove = {
            [Direction['NORTH']]: y < maxY,
            [Direction['SOUTH']]: y !== 0,
            [Direction['EAST']]: x < maxX,
            [Direction['WEST']]: x !== 0,
        };

        if (!stillAllowedToMove[direction]) {
            return false;
        }

        const isOnXAxis =
            Direction[direction] === 'EAST' || Direction[direction] === 'WEST';

        if (isOnXAxis) {
            DirectionBehavior[direction]
                ? this.robot.placement.position.x++
                : this.robot.placement.position.x--;
        } else {
            DirectionBehavior[direction]
                ? this.robot.placement.position.y++
                : this.robot.placement.position.y--;
        }

        return this.robot.placement.position;
    }
}
