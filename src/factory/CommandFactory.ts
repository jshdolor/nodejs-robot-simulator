import { Robot } from '../entities/Robot';

import {
    RobotCommand,
    PlaceCommand,
    MoveCommand,
    LeftCommand,
    RightCommand,
} from '../commands';

import { Direction, Point, DirectionKey } from '../types';

export type RobotPlacement = {
    position: Point;
    direction: Direction;
};

const stringDirections = Object.keys(Direction)
    .filter((d) => isNaN(parseInt(d)))
    .join('|');

export class CommandFactory {
    makeCommand(robot: Robot, command: string): RobotCommand | null {
        if (command.indexOf('PLACE') > -1) {
            const placeRegex = new RegExp(
                `(PLACE) \\d,\\d,(${stringDirections})+`,
                'g'
            );

            const isValidPlaceCommand = command.match(placeRegex);

            if (!isValidPlaceCommand) {
                return null;
            }

            let [x, y, direction] = command.split(' ')[1].split(',');

            const placement: RobotPlacement = {
                position: {
                    x: parseInt(x),
                    y: parseInt(y),
                },
                direction: Direction[direction as DirectionKey],
            };

            return new PlaceCommand(robot, placement);
        }

        if (!robot.isPlaced) {
            return null;
        }

        if (command === 'MOVE') {
            return new MoveCommand(robot);
        }

        if (command === 'LEFT') {
            return new LeftCommand(robot);
        }

        if (command === 'RIGHT') {
            return new RightCommand(robot);
        }

        return null;
    }
}
