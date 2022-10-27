import { render, screen } from '@testing-library/react';
import { RobotList } from './robot.list';

describe('Given Robot component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(<RobotList />);
        });
        test('Then it should display the robots', () => {
            const element = screen.getByText('Velocidad');
            expect(element).toBeInTheDocument();
        });
    });
});
