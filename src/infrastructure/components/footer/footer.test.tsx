import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given Footer component', () => {
    describe('When we render the component', () => {
        test('Then it should display "Aldana"', () => {
            render(<Footer />);
            const element = screen.getByText(/Aldana/i);
            expect(element).toBeInTheDocument();
        });
    });
});
