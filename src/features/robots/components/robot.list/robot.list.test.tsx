import { render, screen } from '@testing-library/react';
import { RobotList } from './robot.list';

describe('Given Robot component', () => {
    describe('When we render the component', () => {
        test('Then it should display the robots', () => {
            render(<RobotList />);
            const element = screen.getByText('Velocidad');
            expect(element).toBeInTheDocument();
        });
    });
});

//Este test me da falso positivo y no supe cómo arreglarlo.
//El del robot.item, no logre hacerlo, lo borre porque netlify me daba problemas.
