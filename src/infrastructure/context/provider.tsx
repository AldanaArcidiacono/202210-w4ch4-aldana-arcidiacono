import { useState } from 'react';
import { Robot } from '../../features/robots/models/robot';
import { RobotContext } from './contesx';

export function RobotContextProvider({ children }: { children: JSX.Element }) {
    const initialRobots: Array<Robot> = [];
    const [robot, setRobot] = useState(initialRobots);

    const handleAdd = (newRobot: Robot) => {
        setRobot([...robot, newRobot]);
    };

    const handleDelete = (deletedId: number) => {
        setRobot(robot.filter((item) => item.id !== deletedId));
    };

    const context = {
        robot,
        handleAdd,
        handleDelete,
    };

    return (
        <RobotContext.Provider value={context}>
            {children}
        </RobotContext.Provider>
    );
}
