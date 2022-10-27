import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given Header component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Robots"', () => {
            render(
                <Router>
                    <Header />
                </Router>
            );
            const element = screen.getByText(/Robots/i);
            expect(element).toBeInTheDocument();
        });
    });
});
