import { Table } from './entities/Table';
import { Robot } from './entities/Robot';
import readlineSync from 'readline-sync';
import { Direction } from './types';

const table = new Table(5);

const robot = new Robot(table, {
    position: { x: 0, y: 0 },
    direction: Direction['NORTH'],
});

const waitCommand = () => {
    const command = readlineSync.question('Command: ');

    if (command === 'REPORT' && robot.isPlaced) {
        console.log(robot.report());
        return;
    }

    robot.executeCommand(command);

    waitCommand();
};

console.log(`
Welcome to Robot Simulator!
Commands:
\n\t PLACE - The first valid command to the robot, after that, anysequence of commands may be issued.
 And should have the x, y positions on the table followed by on which direction the robot will be 
 facing separated with commas like this: PLACE 0,3,N .
\n\t MOVE - will move the toy robot one unit forward in the direction it is currently facing.
\n\t LEFT - the make the robot face left 
\n\t RIGHT - the make the robot face right
\n\t REPORT - this will end the simulation and will display where the robot is currently placed on the table 
`);

waitCommand();
