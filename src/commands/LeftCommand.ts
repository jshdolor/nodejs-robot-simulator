import RobotCommand from './RobotCommand';

export default class LeftCommand extends RobotCommand {
    execute() {
        if (this.robot.placement.direction === 0) {
            this.robot.placement.direction = 3;
            return;
        }
        this.robot.placement.direction--;
    }
}
