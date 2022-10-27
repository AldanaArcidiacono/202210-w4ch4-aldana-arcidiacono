import { createContext } from 'react';
import { Robot } from '../../features/robots/models/robot';

const initialContext: {
    robot: Array<Robot>;
    handleAdd: (newRobot: Robot) => void;
    handleDelete: (deleteID: number) => void;
} = {
    robot: [],
    handleAdd: () => undefined,
    handleDelete: () => undefined,
};

export const RobotContext = createContext(initialContext);
