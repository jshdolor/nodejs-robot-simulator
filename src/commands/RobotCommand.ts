import { Robot } from '../entities/Robot';

export default abstract class RobotCommand {
    constructor(public robot: Robot) {}
    abstract execute(): void;
    //for future use
    // undo() {
    //     this.robot.history.pop();
    //     //do process
    // }
}
