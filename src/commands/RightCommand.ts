import RobotCommand from './RobotCommand';

export default class RightCommand extends RobotCommand {
    execute() {
        if (this.robot.placement.direction === 3) {
            this.robot.placement.direction = 0;
            return;
        }
        this.robot.placement.direction++;
    }
}
