import { Direction, Point } from '../types';
import { Table } from '../entities/Table';

import { RobotCommand } from '../commands';
import { CommandFactory } from '../factory/CommandFactory';

export type RobotPlacement = {
    position: Point;
    direction: Direction;
};

export class Robot {
    public isPlaced: boolean = false;
    public history: RobotCommand[] = [];

    constructor(public table: Table, public placement: RobotPlacement) {}

    executeCommand(strCommand: string): void {
        const commandFactory = new CommandFactory();

        const command = commandFactory.makeCommand(this, strCommand);

        if (command) {
            this.history.push(command);
            command.execute();
        }
    }

    report(): string {
        const { x, y } = this.placement.position;
        const { direction } = this.placement;
        return `Output: ${x},${y},${Direction[direction]}`;
    }
}
