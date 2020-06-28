import { Robot, RobotPlacement } from '../entities/Robot';
import RobotCommand from './RobotCommand';

export class PlaceCommand extends RobotCommand {
    constructor(public robot: Robot, public placement: RobotPlacement) {
        super(robot);
    }

    execute(): void {
        if (this.robot.table.positionAllowed(this.placement.position)) {
            this.robot.placement.position = this.placement.position;
            this.robot.placement.direction = this.placement.direction;
            this.robot.isPlaced = true;
        }
    }
}
